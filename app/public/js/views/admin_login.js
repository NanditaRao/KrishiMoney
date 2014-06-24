$(document).ready(function(){

  var hc = new HomeController();
  var av = new AccountValidator();


$('#account-form').ajaxForm({
  beforeSubmit : function(formData, jqForm, options){
    if (av.validateForm() == false){
      return false;
    } 	else{
    // push the disabled username field onto the form data array //
      formData.push({name:'user', value:$('#user-tf').val()})
      return true;
    }
  },
  success	: function(responseText, status, xhr, $form){
    if (status == 'success') hc.onUpdateSuccess();
  },
  error : function(e){
    if (e.responseText == 'email-taken'){
        av.showInvalidEmail();
    }	else if (e.responseText == 'username-taken'){
        av.showInvalidUserName();
    }
  }
});
$('#name-tf').focus();
$('#github-banner').css('top', '41px');
});
