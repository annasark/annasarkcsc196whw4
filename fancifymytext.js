function bigger() {
   // alert("Hello, world!");

    document.getElementById("text.id").style.fontSize = "2em";
    if(document.getElementById('fancy_button').checked==true)
    {
        document.getElementById("text.id").style.fontWeight="bold";
        document.getElementById("text.id").style.color="blue";
        document.getElementById("text.id").style.textDecoration="underline";
    }
    if(document.getElementById('boring_button').checked==true)
    {
        document.getElementById("text.id").style.fontWeight="normal";
    }

}



function moo() {
    var text=document.getElementById("text.id").value;
    var uppercase_text=text.toUpperCase();
    var parts=uppercase_text.split(".");
    text=parts.join("-Moo");
    document.getElementById("text.id").value=text;

}
