import example from "./example";


test("should know 1+1", () => {
   let expected = 2;
   let actual = example.add(1,1)
    expect(actual).toBe(expected)
})
