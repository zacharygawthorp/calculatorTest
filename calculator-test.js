
it('should calculate the monthly rate correctly', function () {
  const values = {
    amount: 100000,
    years: 10,
    rate: 5,
  };
  expect(calculateMonthlyPayment(values)).toEqual('1060.66')
});


it("should return a result with 2 decimal places", function() {
  const values = {
    amount: 10000,
    years: 10,
    rate: 5
  };
  expect(calculateMonthlyPayment(values)).toEqual('106.07')


});


