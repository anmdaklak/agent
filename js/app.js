var x=true;
$(document).ready
    (function()
        {
            //alert('Tham gia ngay!');
        $('label').click(function()
        {
            //alert('Hiển thị mật khẩu');
            if (x)
            {document.getElementById("password").setAttribute("type", "text");
            x=false;
            }
            else{
                document.getElementById("password").setAttribute("type", "password");
                x=true;
                };
        }
                        );//ngoac cua "click(function()"
        }
    );

