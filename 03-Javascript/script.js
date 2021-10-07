function CalculateSomething(event)
    {
        const currentAge = event.target.value;
        const gender = male;
        var yearsRemainingMale = currentAge - 65;
        var yearsRemainingFemale = currentAge - 60;

        if (gender == male )
        {
            if(yearsRemainingMale <= 0)
            {
                alert('congratulations you have retired') 
            }
            else
            {
                alert(yearsRemainingMale + ' until you have retired')
            }
        }
        else
        {
            if(yearsRemainingFemale <= 0)
            {
                alert('congratulations you have retired') 
            }
            else
            {
                alert(yearsRemainingMale + ' until you have retired')
            }
        }
    

    }


    function GreetingInFrench(event){
        const greeting = event.target.value;

        if(greeting == "Hello"){
            alert('bonjour')
        }
        else if(greeting == "Goodbye"){
            alert('bonjour')
        }
        else {
            alert('not yet supported')
        }
    }