const { deterministicPartitionKey } = require("./dpk");

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });

  it("Returns the literal '0' when given an invalid input", () => {
    const trivialKey = deterministicPartitionKey(1);
    expect(trivialKey).toBe('0');
  })

  it("Returns the literal '0' when given an valid input with a partition key", () => {
    const PARTITION_KEY = "this is a test string that should be returned at the end."
    const trivialKey = deterministicPartitionKey({partitionKey: PARTITION_KEY});
    expect(trivialKey).toBe(PARTITION_KEY);
  })

  it("Returns the literal '0' when given an hehe input", () => {
    const EXPECTED_HASH_FOR_EMPTY_OBJS = 'c1802e6b9670927ebfddb7f67b3824642237361f07db35526c42c555ffd2dbe74156c366e1550ef8c0508a6cc796409a7194a59bba4d300a6182b483d315a862';
    const trivialKey = deterministicPartitionKey({});
    expect(trivialKey).toBe(EXPECTED_HASH_FOR_EMPTY_OBJS);
  })
});
