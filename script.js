const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const repassword = document.getElementById('repassword');

    



    //buradaki fonksiyonlar aşşagıdaki çerçeveyi ayarlıyor  yanlış veya dogru girilmesi durumunda ona göre çerçeve rengi belirleniyor
    // aşşagıda fonksiyona gönderilen 2 değişken eger bir hata varsa 
    function error(input , message) {
        input.className = 'form-control is-invalid';
        const div = input.nextElementSibling;
        div.innerText = message;
        div.className = 'invalid-feedback'; //geri bildirim için kullanılan ifade boostrap 5 kütüphanesinden alınıyor
    };
   
   
   
    // bu fonskiyonda bilgilerin dogru girilmesi durumunda çerçevenin yeşil olmasını ve ikonu ayarlıyor 
    function success(input) {
       
        input.className = 'form-control is-valid';//geri bildirim için kullanılan ifade boostrap 5 kütüphanesinden alınıyor
    };
    
    
    
    //bu fonksiyon girilen degerin formata uygun olup olmadıgını kontrol ediyor.
    function checkEmail(input) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
       
        if(re.test(input.value)) {
            success(input);
        } else {
            error(input, 'hatalı bir mail adresi');
        }
    }


    //aşagıdan alınan bilgilerin kontrolu kısa bir şekilde yapılır ve yukarıdaki error ve success fonksiyonlarına gönderir

   
   
   
   
    //Yol 2

    // function checkRequired(input) {
    //     if(input.value==='') {
    //         error(input,'Gerekli alan');
    //     }else
    //     {
    //         success(input);
    //     }
    // };

    //yol 3

    function checkRequired(inputs) {
        inputs.forEach(function(input) {
            if(input.value === '') {
                error(input, `${input.id} is required.`);
            } else {
                success(input);
            }
        });  
    }

    //uzunlugun kontrol edildigi fonksiyon

    function checkLength(input, min, max){
        if(input.value.length < min){
            error (input,`${input.id} en az ${min} karakter olmalıdır`);
        }else if(input.value.length > max) {
            error (input,`${input.id} en fazla ${max} karakter olmalıdır`);
        }else {
            success(input);
        }
    }

    // girilen şifrelerin eşitliği kontrol ediliyor
    function checkPasswors(input1,input2){
        if(input1.value!==input2.value) {
            error(input2,`Parolalar Eşleşmiyor`);
        }
    }

    //telefon numarası kontrolü
    function checkPhone(input){
        var exp=/^\d{10}$/;
        if(!exp.test(input.value)){
            error(input,'telefon 10 karakterli olmalıdır');
        }
        else {
            success(input);
        }
    }



    //aşşagısı submit olayından sonra çalışır

    // burda girilen bilgilerin formata uygun olup olmadıgını kontrol eder ve ona göre bir fonksiyona gönderir
    form.addEventListener('submit', function(e) {
        e.preventDefault();//yenilenmesini önlüyor

        //yol1
        
        //  if(username.value ==='') {
        //     error(username ,"username gerekli");
        //  } 
        //  else {
        //     success(username);
        //  }
        //  if(email.value ==='') {
        //     error(email,"email gerekli");
        //  }
        //  else if(validateEmail(email)){
        //     error(mail,"Düzgün bir mail adresi giriniz.")
        // }
        //  else {
        //     success(email);
        //  } 
        //  if(password.value ==='') {
        //     error(password ,"password gerekli");
        //  }
        //  else {
        //     success(password);
        //  }  
        //  if(repassword.value ==='') {
        //     error(repassword,"repassword gerekli");
        //  }
        //  else {
        //     success(repassword);
        //  }



        //yol2
        // checkRequired(username);
        // checkRequired(email);
        // checkRequired(password);
        // checkRequired(repassword);


        //yol 3
        //dizi şeklinde yolladık
        checkRequired([username,email,password,repassword,phone]);
        checkEmail(email);// email kontrol için yolluyoruz.
       
        //girilen karakter sayısını uzunlugunu kontrol ediyoruz ve sınırlıyoruz
        checkLength(username,7,15);
        checkLength(password,7,15);
        
        
        
        //girilen şifrelerin eşitolup olmadıgı kontrol ediliyor
        checkPasswors(password,repassword);


        //telefon numarası kontrolu
        checkPhone(phone);


});