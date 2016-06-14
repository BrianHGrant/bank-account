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
       $("#help-block-name").show();
    } else if (!initialDeposit) {
       $("#help-block-deposit").show();
    } else {
      newUserAccount = new Account(accountName, initialDeposit);
      $("#user-register").remove();
      $("#register").hide();
      $("#transaction").show();
      $("#output").show();
      $("#account-balance").text(newUserAccount.balance);
      $("#welcome").text(newUserAccount.name);
    }

    $("#deposit-withdrawal").click(function(){
      var accountDeposit = parseInt($("#deposit").val());
      var accountWithdrawal = parseInt($("#withdrawal").val());
      if (!accountDeposit) {
         accountDeposit = 0;
      }
      if (!accountWithdrawal) {
        accountWithdrawal = 0;
      }
      newUserAccount.add(accountDeposit);
      newUserAccount.subtract(accountWithdrawal);
      $("#account-balance").text(newUserAccount.balance);
      $("#withdrawal").val(0);
      $("#deposit").val(0);
    });

    $("#new-account")[0].reset();
  });
});
