$(function(){
            
    $('#myForm').submit(function(){

        if(formularioPreenchido()){
                var form = $('#myForm');
                $('#myForm').ajaxSubmit({
                    beforeSubmit:function(){
                        form.find('[type=submit]').attr('disabled','true');
                        form.find('[type=submit]').animate({'opacity':'0.6'})
                        form.find('[type=submit]').attr('value','Carregando');
                        form.find('[type=submit]').css('cursor','wait');
                    },
                    success:function(data){
                        //Aqui você pode inserir uma div, por exemplo.
                        //Qualquer message de sucesso, após o formulario ter sido enviado.
                        alert('Formulário foi enviado com sucesso!');
                        form.find('[type=submit]').removeAttr('disabled');
                        form.find('[type=submit]').animate({'opacity':'1'})
                        form.find('[type=submit]').attr('value','Enviar');
                        form.find('[type=submit]').css('cursor','pointer');
                        form[0].reset();
                    }
                });
        }else{
            alert("Campos Vázios não são permitidos!");
        }



        return false;
    })

    function formularioPreenchido(){
        var name = $('[name=name]').val();
        var email = $('[name=email]').val();
        var subject = $('[name=subject]').val();
        var message = $('[name=message]').val();
        if(name === '' || email === '' || subject === '' || message === ''){
            return false;
        }else{
            return true;
        }

    }
})