const crypto = require("crypto");
const TRIVIAL_PARTITION_KEY = "0";
const MAX_PARTITION_KEY_LENGTH = 256;

const turnToString = (cand) =>  typeof cand !== 'string' ? JSON.stringify(cand) : cand;
const makeHash = (data) => crypto.createHash("sha3-512").update(data).digest("hex");

exports.deterministicPartitionKey = (event) => {
  if (!event || typeof event !== 'object') return TRIVIAL_PARTITION_KEY;

	let candidate;

	candidate = event.partitionKey
		? event.partitionKey
		: makeHash(JSON.stringify(event));

	candidate = turnToString(candidate);

	if (candidate.length > MAX_PARTITION_KEY_LENGTH) {
		candidate = makeHash(candidate);
	}
	return candidate;
};
