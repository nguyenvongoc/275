function result()
{
    let weight =+ document.getElementById('weight').value;
    let height =+ document.getElementById('height').value;
    if(weight==0 || height==0)
    {
    alert("Again !")
    }
    else
    {
        result = height/(weight*2);
        document.getElementById('result').innerHTML ="BMI Index : "+ result;
    if(result<18)
    {
        document.getElementById('notification').innerHTML ="BMI : Gầy";
    }
    else if(result>=18||result<=25)
    {
        document.getElementById('notification').innerHTML ="BMI : Bình thường";
    }
    else if(result>25)
        document.getElementById('notification').innerHTML ="BMI : Béo";
    else
    document.getElementById('notification').innerHTML = null;
    }
}

function elc()
{
    let money =+ document.getElementById('money').value;
    if(money==0)
    {   
         alert('Bạn cần nhập số điện !')
    }
    else
    {
    result =money*2000;
    document.getElementById('cmt').innerHTML="Tiền điện của bạn : "+result+" nghìn đồng ."
    }
}

