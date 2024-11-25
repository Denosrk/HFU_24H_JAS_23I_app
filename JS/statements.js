describe("Statements", () => {
    
    test("for_of", () => {
        const items = [10, 20, 30, 40, 50];
    
        for (const item of items) {
          const expectedItem = items[items.indexOf(item)];
          expect(item).toBe(expectedItem);
        }
      });
    
});