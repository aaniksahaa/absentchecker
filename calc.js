
function answer(){


    var names = ["","ANIK SAHA", "PRAMANANDA SARKAR", "A.H.M TOWFIQUE MAHMUD", "MD. ZIM - MIM SIDDIQEE SOWDHA", "ANUP HALDER JOY", "KOWSHIK SAHA", "ADNAN IBNEY FARUQ", "MD. AFZAL HOSSAIN TANIM", "AHMMAD NUR SWAPNIL", "SHOVON ROY", "MD. TANVIRUL ISLAM TURAD", "ABRAR JAHIN SARKER", "AL MUHIT MUHTADI", "TANVIR HOSSAIN", "ADIBAH MAHMUD", "TURJOY DEY", "ABDULLAH MUHAMMED AMIMUL", "MUNZER MAHMOOD", "JARIN TASNEEM", "MOSTAFA RIFAT TAZWAR", "AFZAL HOSSAN", "EKRAMUL HAQUE AMIN", "JABER AHMED DEEDAR", "ASIF KARIM", "MOST. SONIA KHATUN", "MD. JAKARIA HOSSAIN", "SWASTIKA PANDIT", "MD. TAMIM IQBAL", "MD. MINHAJUL ISLAM FUAD", "FAIRUZ MUBASHWERA", "SOUMIK BHATTACHARJEE", "MD. RIFAT HOSSAIN", "SOMIK DASGUPTA", "GOURAB BISWAS", "MD. RAFIUL ISLAM NIJAMY", "TAWHID MUHAMMAD MUBASHWIR", "ZIA UL HASSAN ABDULLAH", "MUSA TUR FARAZI", "MD. AS-AID RAHMAN", "REDUANUL ISLAM IMON", "MD. IMTIAZ KABIR", "MD. FARHAD AL AMIN DIPTO", "MAHAMUDUL HASAN FAHIM", "S. M AFRIDI MAHMUD", "PRITHU ANAN", "TUSHER BHOMIK", "AKANTA DAS", "SHEIKH RAHAT MAHMUD", "OITIJHYA HOQUE", "NABILA TABASSUM", "MD. SAJID MOSTAFIZ NOOR", "TAUSIF RASHID", "MD. RABBY HOSSAIN", "AWESH ISLAM", "HA MEEM", "AZMAL KARIM", "TASINUL ISLAM AHON", "SHABAB MOSHARRAF", "SABBIR ALAM SAAD", "IBNUL ISLAM", "FARRIHA AFNAN", "RAFIQUL ISLAM RAYAN", "ABID HASAN KHONDAKER", "TAHSIN KABIR MAZUMDER", "ABDULLAH FAIYAZ", "KAZI TAKIA TALHA", "MASNOON MUZTAHID", "MD. SUMON HOSSAIN", "SOUVIK MANDOL", "MD. IRTIAZ KABIR", "SAGOR CHANDA", "ABRAR RAHMAN ABIR", "SHANTO MONDOL", "DIPANTA KUMAR ROY NOBO", "MOYEN UDDIN", "S. M. KAUSAR PARVEJ", "SADATUL ISLAM SADI", "M. M. NAYEM", "ANANYA SHAHRIN PROMI", "MOHAMMAD NINAD MAHMUD", "KAZI JAYED HAIDER", "MST. FAHMIDA SULTANA NAZNIN", "JARIN TASNIM", "MD. MIRAJ HASAN", "MD. OWALIUR RAHMAN", "SUHAEB BIN MATIN", "IFFAT BIN HOSSAIN", "IFTEKHAR SANWAR TALUKDAR", "WAHID AL AZAD NAVID", "TAWKIR AZIZ RAHMAN", "WASEEM MUSTAK ZISAN", "SHAHAD SHAHRIAR RAHMAN", "SHAHRIAR AHMED SEAM", "GOLAM MOSTOFA", "TAMIM HASAN SAAD", "HABIBA RAFIQUE", "MUNIM THAHMID", "MD. TAKY SHAHARAIR", "MAISHA MAKSURA", "SWARUP SIDHARTHO MONDOL", "ISTIAK AHMMED RIFTI", "MD.TASHDIQUR RAHMAN", "H. M. SHADMAN TABIB", "MD. HASIN ARAFAT AL SIFAT", "MOHAMMAD ISHRAK ADIT", "TASRIAD AHMED TIAS", "MUSHFIQUR RAHMAN", "KAZI REDWAN ISLAM", "NOUSHIN TABASSUM AOISHY", "MST. METALY KHATUN", "SADNAM FAIYAZ", "ARNAB DEY", "MOHAMMAD ALI BHUIYAN", "SHAHRIAR KABIR", "MD. HASNAEN ADIL", "MD. MUHYMENUL ISLAM", "RAKESH DEBNATH", "FUAD AHMED UDOY", "SADIA AFRIN SITHI", "EKIN CHAKMA" ];



    var arr = [0]

    for(i=1;i<=120;i++)
        arr[i] = 0;

    str = document.getElementById("val").value
    start = parseInt(document.getElementById("start").value)
    end = parseInt(document.getElementById("end").value)

    var lines = str.split("\n")

    var absent = '<font color="yellow" size="5">Absent Roll Numbers and Names</font><br><br>'

    for(var i=0;i<lines.length;i++)
    {
        var k = lines[i][0];
        if(k>='0'&&k<='9')
        {
            var b = lines[i].slice(0,7);
            var num = parseInt(b)
            arr[num%1000] = 1
        }
    }
    
    for(i=start;i<=end;i++)
        if(arr[i]==0)
        {
            var k = 2005000 + i;
            absent += k.toString();
            absent += " - "
            absent += names[i]
            absent += " <br><br>"
        }


    document.getElementById("from").innerHTML = absent
    
}

function S(r,n) {
    if(n<1){
        return 0
    }
    if(n==1){
        return 1
    }
    return (Math.pow(r,n)-1)/(r-1)
}

function ceiling(n) {
    if(n>Math.floor(n) && n-Math.floor(n)<0.0000001){
        n = Math.floor(n)
    }
    else{
        n = Math.ceil(n)
    }

    return n
}

function f(r,x) {

    if(r==1){
        p = x-1
        q = p+2
        str = q.toString()
    }
    else{
        n = Math.log(x*(r-1)+1)/Math.log(r)

        n = ceiling(n)

        p = S(r,n-2)+ceiling((x-S(r,n-1))/r)

        q = S(r,n) + (x-S(r,n-1)-1)*r

        str = ""

        for(i=1;i<r;i++){
            k = q+i
            str = str + k.toString() + ", "
        }

        k++
        str = str + k.toString()
    }

    document.getElementById("from").innerHTML = "You will be nominated by Person No. " + p.toString()
    document.getElementById("to").innerHTML = "You will have to nominate Persons No. " + str
}