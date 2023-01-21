let btn = document.getElementById("btn");

btn.addEventListener('click', () => {
    let value = document.getElementById("love").value;
    console.log(value);

    if (value == "No" || value == "Fuck No") {
        document.getElementById("menu").innerHTML = ` You chose ${value} :(( fr??, me iz sad.`;
        document.getElementById("gif2").width = '1100';
        document.getElementById("gif2").height = '900';
        document.getElementById("gif2").style.visibility = 'visible';
        document.getElementById("gif").width = '0';
        document.getElementById("gif").height = '0';
        document.getElementById("gif").style.visibility = 'none';


    } else {


        document.getElementById("menu").innerHTML = `
            Cherrie wants you to know that she loves you more <33333`;
        document.getElementById("gif").width = '1100';
        document.getElementById("gif").height = '900';
        document.getElementById("gif").style.visibility = 'visible';
        document.getElementById("gif2").width = '0';
        document.getElementById("gif2").height = '0';
        document.getElementById("gif2").style.visibility = 'none';


    }
})
