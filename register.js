$('document').ready(function(){
    var nameregex = /^[가-힣a-zA-Z]+$/;
    $.validator.addMethod("validname", function(value, element){
        return this.optional(element) || nameregex.test(value);
    });

    var eregex = /^([a-zA-Z0-9_\.\-\+])+@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    $.validator.addMethod("validemail", function(value, element){
        return this.optional(element) || eregex.test(value);
    });

    var numregex = /^[0-9]{2,3}-[0-9]{3,4}-[0-9]{4}/;
    $.validator.addMethod("validphone", function(value, element){
        return this.optional(element) || numregex.test(value);
    });

    $("form[name='tuner-register-form']").validate({
        rules: {
          name: {
              required: true,
              validname: true,
              minlength: 2
          },
          email: {
            required: true,
            validemail: true
          },
          password: {
            required: true,
            minlength: 8,
            maxlength: 15
          },
          passwordcheck: {
              required: true,
              equalTo: '#password'
          },
          phonenumber: {
            required: true,
            validphone: true
          },
          location1: {
              required: true
          },
          location2: {
              required: true
          },
          instrument1: {
              required: true
          },
          instrument2: {
              required: true
          },
          content: {
              required: true
          }
        },
        messages: {
          name: {
            required: "이름을 입력해주세요.",
            validname: "이름은 한글과 영어로만 입력해주세요.",
            minlength: "이름은 2글자 이상 입력해주세요. "
          },
          email: {
            required: "이메일을 입력해주세요.",
            validname: "올바른 이메일을 입력해주세요."
          },
          password: {
            required: "비밀번호를 입력해주세요.",
            minlength: "비밀번호는 최소 8글자에서 최대 15글자로 작성해주세요.",
            maxlength: "비밀번호는 최소 8글자에서 최대 15글자로 작성해주세요."
          },
          passwordcheck: {
            required: "비밀번호를 확인해주세요.",
            equalTo: "비밀번호가 일치하지 않습니다. "
          },
          phonenumber: {
            required: "전화번호를 입력해주세요.",
          },
          content: {
            required: "내용을 입력해주세요."
          }
        },
        submitHandler: function(form) {
          form.submit();
        }
      });


      $('#user-form').hide();
      
      $("input[name='user']").change(function(){
        if($("input[name='user']:checked").val() == '사용자'){
          $('#user-form').show();
          $('#tuner-form').hide();
          $("form[name='user-register-form']").validate({
            rules: {
              name: {
                  required: true,
                  validname: true,
                  minlength: 2
              },
              email: {
                required: true,
                validemail: true
              },
              password: {
                required: true,
                minlength: 8,
                maxlength: 15
              },
              passwordcheck: {
                  required: true,
                  equalTo: '#password'
              },
              phonenumber: {
                required: true,
                validphone: true
              }
            },
            messages: {
              name: {
                required: "이름을 입력해주세요.",
                validname: "이름은 한글과 영어로만 입력해주세요.",
                minlength: "이름은 2글자 이상 입력해주세요. "
              },
              email: {
                required: "이메일을 입력해주세요.",
                validname: "올바른 이메일을 입력해주세요."
              },
              password: {
                required: "비밀번호를 입력해주세요.",
                minlength: "비밀번호는 최소 8글자에서 최대 15글자로 작성해주세요.",
                maxlength: "비밀번호는 최소 8글자에서 최대 15글자로 작성해주세요."
              },
              passwordcheck: {
                required: "비밀번호를 확인해주세요.",
                equalTo: "비밀번호가 일치하지 않습니다. "
              },
              phonenumber: {
                required: "전화번호를 입력해주세요.",
              }
            },
            submitHandler: function(form) {
              form.submit();
            }
          });
        }
        else if($("input[name='user']:checked").val() == '조율사'){
          $('#user-form').hide();
          $('#tuner-form').show();
        }
      });
});