function openplayerconfig( ){
 
    playerconfielement .style.display= 'block';
    backdropelement .style.display = 'block'
}

function cancelpage(){
    playerconfielement .style.display= 'none';
    backdropelement .style.display = 'none'
}

function saveplayerconfig (event)
{
    event.preventdefault();
    const formdata = new formdata (event.target); 
    const enterplayername = formdata.get('Playername').trim();

if (!enterplayername){
    event.target.firstelementchild.classlist.add('error')
    erroroutput.textContent = 'please enter valid player name ';
    return;

}
    
}



























