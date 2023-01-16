// 14. На вход подается url. Если он начинается с http, содержит хотя бы один “/” и
// заканчивается подстрокой .com или .ru, то вывести true, в противном случае false




// const email = prompt('');
const email = 'http/sasha_yarmosh@mail.com';
alert(email);



if (email.startsWith('http') && email.includes('/') && (email.endsWith('.com') || email.endsWith('.ru'))) {
    console.log(true);
} else console.log(false);




