import { ChannelName } from "./ChannelName";

describe("ChannelName", () => {
  it("should create a channel name", () => {
    const name = ChannelName.create("My Channel");
    expect(name.value).toBe("My Channel");
  });
  it("should throw an error if the name is too short", () => {
    expect(() => ChannelName.create("ab")).toThrow(
      "Channel name must be at least 3 characters long"
    );
  });
  it("should throw an error if the name is too long", () => {
    expect(() => ChannelName.create("a".repeat(31))).toThrow(
      "Channel name must be at most 30 characters long"
    );
  });
});
