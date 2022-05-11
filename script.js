function verify(form)
    {
    if(document.forms[0].elements[0].value=="")
    {
    alert("Please Enter User ID");
    document.forms[0].elements[0].focus();
    return(false);
    }
    if(document.forms[0].elements[1].value=="")
    {
    alert("Please Enter your Password");
    document.forms[0].elements[2].value="";
    document.forms[0].elements[1].focus();
    return(false);
    }
    if(document.forms[0].elements[1].value.length<4)
    {
    alert("Password must be greater than 4 character");
    document.forms[0].elements[1].value="";
    document.forms[0].elements[2].value="";
    document.forms[0].elements[1].focus();
    return(false);
    }
    if(document.forms[0].elements[2].value=="")
    {
    alert("Please Enter your Confirm Password");
    document.forms[0].elements[2].focus();
    return(false);
    }
    if((document.forms[0].elements[1].length)!=(document.forms[0].elements[2].length))
    {
    alert("Your Password does not match with Confirm Password");
    document.forms[0].elements[1].value="";
    document.forms[0].elements[2].value="";
    document.forms[0].elements[1].focus();
    return(false);
    }
    
    
    if((document.forms[0].elements[1].length)==(document.forms[0].elements[2].length))
    {
    if((document.forms[0].elements[1].value)!=(document.forms[0].elements[2].value))
    {
    alert("Your Password does not match with Confirm Password");
    document.forms[0].elements[1].value="";
    document.forms[0].elements[2].value="";
    document.forms[0].elements[1].focus();
    return(false);
    }
    }
    if(document.forms[0].elements[3].value=="secq")
    {
    alert("Please Select your Security Question");
    document.forms[0].elements[3].focus();
    return(false);
    }
    if(document.forms[0].elements[4].value=="")
    {
    alert("Please Answer the security question");
    document.forms[0].elements[4].focus();
    return(false);
    }
    if(document.forms[0].elements[5].value=="DD")
    {
    alert("Please select Day of DOB");
    document.forms[0].elements[5].focus();
    return(false);
    }
    if(document.forms[0].elements[6].value=="MM")
    {
    alert("Please select Month of DOB");
    document.forms[0].elements[6].focus();
    return(false);
    }
    if(document.forms[0].elements[7].value=="YYYY")
    {
    alert("Please select Year of DOB");
    document.forms[0].elements[7].focus();
    return(false);
    }
    if(document.forms[0].elements[10].checked==true)
    {
    if(document.forms[0].elements[11].value=="")
    {
    alert("Please Enter your First Name");
    document.forms[0].elements[11].focus();
    return(false);
    }
    if(document.forms[0].elements[13].value=="")
    {
    alert("Please Enter your Last Name");
    document.forms[0].elements[13].focus();
    return(false);
    }
    if(document.forms[0].elements[14].value=="Year")
    {
    alert("Please specify your Academic year");
    document.forms[0].elements[14].focus();
    return(false);
    }
    if(document.forms[0].elements[15].value=="adminyear")
    {
    alert("Please put your Admission Year");
    document.forms[0].elements[15].focus();
    return(false);
    }
    if(document.forms[0].elements[16].value=="dept")
    {
    alert("Please Select your Department");
    document.forms[0].elements[16].focus();
    return(false);
    }
    if(document.forms[0].elements[17].value=="")
    {
    alert("Please put your Roll Number");
    document.forms[0].elements[17].focus();
    return(false);
    }
    if(document.forms[0].elements[17].value!="")
    {
    r0=document.forms[0].elements[17].value.indexOf('2');
    r1=document.forms[0].elements[17].value.indexOf('k');
    r2=parseInt(document.forms[0].elements[17].value.charAt(2));
    r3=document.forms[0].elements[17].value.indexOf('_');
    r4=parseInt(document.forms[0].elements[17].value.charAt(4));
    r5=parseInt(document.forms[0].elements[17].value.charAt(5));
    r6=parseInt(document.forms[0].elements[17].value.charAt(6));
    len=document.forms[0].elements[17].value.length;
    if((len!=7)||(r0!=0)||(r1!=1)||(r3!=3)||(r4>6 || r4<1)||(r2>9 || r2<1))
    {
    alert("Not a valid Roll Number");
    document.forms[0].elements[17].focus();
    return(false)
    }
    switch(document.forms[0].elements[16].value)
    {
    case 'IT':
    if(r4!=6||(r5>4||r5<0)||(r6>9||r6<0))
    {
    alert("Not a valid Roll Number of Information Technology");
    document.forms[0].elements[16].focus();
    return(false)
    }break;
    case 'CSE':
    if(r4!=5||(r5>4||r5<0)||(r6>9||r6<0))
    {
    alert("Not a valid Roll Number of Computer Science");
    document.forms[0].elements[16].focus();
    return(false)
    }break;
    case 'ECE':
    if(r4!=4||(r5>4||r5<0)||(r6>9||r6<0))
    {
    alert("Not a valid Roll Number of Electronics");
    document.forms[0].elements[16].focus();
    return(false)
    }break;
    case 'EE':
    if(r4!=2||(r5>6||r5<0)||(r6>9||r6<0))
    {
    alert("Not a valid Roll Number of Electrical Engineering");
    document.forms[0].elements[16].focus();
    return(false)
    }break;
    case 'ME':
    if(r4!=3||(r5>6||r5<0)||(r6>9||r6<0))
    {
    alert("Not a valid Roll Number of Mechanical Engineering");
    document.forms[0].elements[16].focus();
    return(false)
    }break;
    case 'CE':
    if(r4!=1||(r5>6||r5<0)||(r6>9||r6<0))
    {
    alert("Not a valid Roll Number of Civil Engineering");
    document.forms[0].elements[16].focus();
    return(false)
    }break;
    }
    switch(document.forms[0].elements[14].value)
    {
    case 'Fourth':
    if(r2!=1||(r2>9||r2<0))
    {
    alert("Not a valid Roll Number of Forth Year");
    document.forms[0].elements[14].focus();
    return(false)
    }break;
    case 'Third':
    if(r2!=2||(r2>9||r2<0))
    {
    alert("Not a valid Roll Number of Third Year");
    document.forms[0].elements[14].focus();
    return(false)
    }break;
    case 'Second':
    if(r2!=3||(r2>9||r2<0))
    {
    alert("Not a valid Roll Second Year");
    document.forms[0].elements[14].focus();
    return(false)
    }break;
    
    case 'First':
    if(r2!=4||(r2>9||r2<0))
    {
    alert("Not a valid Roll Number of First Year");
    document.forms[0].elements[14].focus();
    return(false)
    }break;
    }
    }
    }
    if(document.forms[0].elements[24].checked==true)
    {
    if(document.forms[0].elements[25].value=="")
    {
    alert("Please Enter Your First Name");
    document.forms[0].elements[25].focus();
    return(false);
    }
    if(document.forms[0].elements[27].value=="")
    {
    alert("Please Enter your Last Name");
    document.forms[0].elements[27].focus();
    return(false);
    }
    if(document.forms[0].elements[30].value=="state")
    {
    alert("Please Select Your State");
    document.forms[0].elements[30].focus();
    return(false);
    }
    if(document.forms[0].elements[31].value=="country")
    {
    alert("Please Select Your State");
    document.forms[0].elements[31].focus();
    return(false);
    }
    if((document.forms[0].elements[32].value=="pincode")||(document.forms[0].elements[33].value=""))
    {
    alert("Please Select Your Pincode OR if Other specify");
    document.forms[0].elements[32].focus();
    return(false);
    }
    }
    }
    function studentclear(form)
    {
    document.forms[0].elements[11].value="";
    document.forms[0].elements[12].value="";
    document.forms[0].elements[13].value="";
    document.forms[0].elements[14].value="Year";
    document.forms[0].elements[15].value="adminyear";
    document.forms[0].elements[16].value="dept";
    document.forms[0].elements[17].value="";
    document.forms[0].elements[18].value="selecthostel";
    document.forms[0].elements[19].value="";
    document.forms[0].elements[20].value="";
    document.forms[0].elements[21].value="";
    document.forms[0].elements[22].value="";
    document.forms[0].elements[23].value="";
    document.forms[0].elements[25].focus();
    }
    function generalclear(form)
    {
    document.forms[0].elements[25].value="";
    document.forms[0].elements[26].value="";
    document.forms[0].elements[27].value="";
    document.forms[0].elements[28].value="City";
    document.forms[0].elements[29].value="";
    document.forms[0].elements[30].value="state";
    document.forms[0].elements[31].value="country";
    document.forms[0].elements[32].value="pincode";
    document.forms[0].elements[33].value="";
    document.forms[0].elements[34].value="";
    document.forms[0].elements[35].value="";
    document.forms[0].elements[36].value="";
    document.forms[0].elements[37].value="";
    document.forms[0].elements[11].focus();
    }