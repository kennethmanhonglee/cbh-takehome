const crypto = require("crypto");

const TRIVIAL_PARTITION_KEY = "0";
const MAX_PARTITION_KEY_LENGTH = 256;

const turnToString = (cand) => {
  if (typeof cand !== 'string') {
    return JSON.stringify(cand);
  }

  return cand
}

exports.deterministicPartitionKey = (event) => {
  let candidate;

  if (event && event.partitionKey) {
    candidate = event.partitionKey;
  } else if (event) {
    const data = JSON.stringify(event);
    candidate = crypto.createHash("sha3-512").update(data).digest("hex");
  }

  if (candidate) {
    candidate = turnToString(candidate);
  } else {
    candidate = TRIVIAL_PARTITION_KEY;
  }

  if (candidate.length > MAX_PARTITION_KEY_LENGTH) {
    candidate = crypto.createHash("sha3-512").update(candidate).digest("hex");
  }
  return candidate;
};