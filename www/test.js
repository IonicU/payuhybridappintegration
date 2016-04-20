//function openWindowWithPostRequest() {
  var winName='MyWindow';
  //var winURL='https://test.payu.in/_payment.php';
    var winURL='https://test.payu.in/_payment';
   // var winURL='https://test.payu.in/merchant/postservice.php?form=2';
  var windowoption='resizable=yes,height=600,width=800,location=0,menubar=0,scrollbars=1';
  //var params = { 'param1' : '1','param2' :'2'};  
 var params = { 
 'key' : 'gtKFFx',
 'txnid' :'mdd0sss9023',
 'amount' : '100',
 'productinfo' :'oxygenconcentrator',
 'firstname' : 'narmada',
 'email' :'narmada.jangam@gmail.com',
 'phone' : '8143702721',
 'surl' :'https://payu.herokuapp.com/success',
/*  'Furl' :'https://www.payumoney.com/mobileapp/payumoney/failure.php', */
 'Furl' :'https://payu.herokuapp.com/failure',
 'Hash' :'9feaefa45b5b68c7091f7f1ff513183f3fca5b23b47d47d760c285c8ad2d5f9fd1ec9514f2bad5d3672b6cb9138af5dd5350a5cf1e87c6f20ca26817ee02ae77'
 };     
  var form = document.createElement("form");
  form.setAttribute("method", "post");
  form.setAttribute("action", winURL);
  form.setAttribute("target",winName);  
  for (var i in params) {
    if (params.hasOwnProperty(i)) {
      var input = document.createElement('input');
      input.type = 'hidden';
      input.name = i;
      input.value = params[i];
      form.appendChild(input);
    }
  }              
  document.body.appendChild(form);                       
 // window.open('', winName,windowoption);
   form.target = winName;
   console.log(form.action);
  
  form.submit();   


           
//}
	