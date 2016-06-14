// Object constructor for new account
function Account(name, balance){
  this.name = name;
  this.balance = balance;
}

Account.prototype.add = function(number){
  return this.balance += number;
}

Account.prototype.subtract = function(number) {
    return this.balance -= number;
  }

$(document).ready(function(){

  $("#new-account").submit(function(event){
    event.preventDefault();

    var accountName = $("#user-name").val();
    var initialDeposit = parseInt($("#first-deposit").val());
    if (!accountName) {
       alert("Please enter a name.");
    } else if (!initialDeposit) {
      alert("Please enter a deposit.");
    } else {
      newUserAccount = new Account(accountName, initialDeposit);
    }

    $("#deposit-withdrawal").click(function(){
      var accountDeposit = parseInt($("#deposit").val());
      var accountWithdrawal = parseInt($("#withdrawal").val());
      if (!accountDeposit) {
         accountDeposit = 0;
      } else if (!accountWithdrawal) {
        accountWithdrawal = 0;
      }
      newUserAccount.add(accountDeposit);
      newUserAccount.subtract(accountWithdrawal);
      $("#account-balance").text(newUserAccount.balance);
      console.log(newUserAccount.balance)
      $("#withdrawal").val(0);
      $("#deposit").val(0);
    });
      $("#output").show();
      $("#account-balance").text(newUserAccount.balance);

    console.log(newUserAccount);
    // $('#output').text(output);
    $("#new-account")[0].reset();
  });
});
