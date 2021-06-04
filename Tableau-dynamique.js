var descriptions = [];

function pushData()
{
    var inputText = document.getElementById('inputText').value;
    descriptions.push(inputText);

    var temp = "";

    for(i = 0; i < descriptions.length; i++)
    {
        temp = temp + descriptions[i] + "<br/>";
    }

    document.getElementById('pText').innerHTML = temp;
}
