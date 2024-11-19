function dugmeSubmit() {
    var ime = document.getElementById("ime").value.trim();
    var prezime = document.getElementById("prezime").value.trim();
    var email = document.getElementById("email").value.trim();
    var mobile = document.getElementById("mobile").value.trim();
    var message = document.getElementById("message").value.trim();
    ispisiPodatke(ime,prezime,email,mobile,message);
   }

function ispisiPodatke(ime,prezime,email,mobile,message) {
    var niz = [];
    var imeprezime = ime.concat(" ", prezime);
    niz.push(imeprezime);
    niz.push(email);
    niz.push(mobile);
    niz.push(message);
   
if (ime && prezime && email && mobile && message) {
    var html = '<p>Uspesno ste popunili formu</p>';
    var i=0;
while (i < niz.length) {
    console.log(niz[i]);
    html += '<p>'+niz[i]+'</p>';
    i++;
}
document.getElementById('rezultati').innerHTML = html;
}
return html;
}

function logoKlik(thisEl){
    thisEl.style.transform = 'rotate(180deg)';
    return thisEl;
   }
