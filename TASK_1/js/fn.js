

function stringToArray(str) {
    // نستخدم دالة split لتقسيم النص إلى كلمات باستخدام الفراغات كفاصل
    return str.split(' ');
  }
  
  let text = "orange acdume";
  let Array = stringToArray(text);
  console.log(Array);

  
 //////////////////////////
  //console.log( '7774780043'.replace(/(\d{0})(.*)(\d{3})/, '$1******$3'))
  //console.log( 'orange_academy@orange.jo'.replace(/(\w{6})(.*)(\w{0})@(.*)/, '$1******$3@$4'))

  function hideEmail(email) {
    // نقسم البريد الإلكتروني إلى جزئين: قبل وبعد علامة @
    let [user, domain] = email.split('@');
    
    // نجعل الجزء الأول (user) مخفيًا مع الإبقاء على أول 3 أحرف
    let hiddenUser = user.slice(0, 3) + '*'.repeat(user.length - 3);
    
    // نعيد البريد الإلكتروني مع الجزء المخفي
    return hiddenUser + '@' + domain;
  }
  
  // مثال على الاستخدام
  let hiddenEmail = hideEmail("example@gmail.com");
  console.log(hiddenEmail); // exa***@gmail.com
  
  /////////////////////////////////////////////


