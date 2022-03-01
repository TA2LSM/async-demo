//NodeJS kodu "single thread" olarak çalışır

/*
console.log("Before");

setTimeout(() => {
  console.log("Reading a user from a database...");
}, 2000);
//2000ms bekle sonra fonksiyonu işlet burada timeout set ediliyor ve 2sn sonra dönüşü bekleniyor.
//{} içindeki fonksiyon çağrılmak üzere zamanlanıyor(schedule ediliyor) zamanı gelince de işletiliyor.

console.log("After");
//son satırdan sonra kod işletici free duruma düşer başka işlere bakar.
//2sn geçinde yukardaki kodu çağırır yine free duruma düşer.
//konsola Before, After ve Reading a user from a database... yazılır.
*/

/*
console.log("Before");
const user = getUser(1);
console.log(user); //undefined olarak gözükecektir.
console.log("After");

function getUser(id) {
  setTimeout(() => {
    console.log("Reading a user from a database...");
    return { id: id, gitHubUserName: "ta2lsm" };
  }, 2000);
}
*/
/*
console.log("Before");
const user = getUser(1);
console.log(user); //5 olarak gözükecektir ama istediğimiz değer bu değildir.
console.log("After");

function getUser(id) {
  setTimeout(() => {
    console.log("Reading a user from a database...");
    return { id: id, gitHubUserName: "ta2lsm" };
  }, 2000);

  return 5;
}
*/

// *****************************************************************
// Callbacks
// Promises
// Async/await
// bunları kullanarak async işlemleri yapıyoruz.
/*
console.log("Before");

//getUser(1, (user) => {  //ya da aşağıdaki gibi yazılabilir...
getUser(1, function (user) {
  console.log("User:", user);
});

console.log("After");

//callback default bir isimdir ve tanınımlıdır. Bu çekilde yazılması gerekiyor.
function getUser(id, callback) {
  setTimeout(() => {
    console.log("Reading a user from a database...");
    callback({ id: id, gitHubUserName: "ta2lsm" });
  }, 2000);
}
// yukarıdaki kodda önce konsola "before" yazar
// sonra getUser fonksiyonunu çağırır. getUser 2sn'lik timer kurar ver geri döner
// konsola "after" yazar
// 2sn sonra konsola "Reading a user from a database..." yazılır ve user odjesi
// oluşturulup callback() olarak girdi verilen fonksiyona bu bilgi girdi olarak döndürülür.
// getUser içerisinde tanımlanan function(user) işletilir ve konsola user bilgisi yazdırılır.
// *****************************************************************
*/

console.log("Before");

//getUser(1, (user) => {  //ya da aşağıdaki gibi yazılabilir...
getUser(1, function (user) {
  console.log("User:", user);

  //Get the repositories
  getRepositories(user.gitHubUserName, (repositories) => {
    console.log("User's Repostories:", repositories);
  });
});

console.log("After");

//callback default bir isimdir ve tanınımlıdır. Bu çekilde yazılması gerekiyor.
function getUser(id, callback) {
  setTimeout(() => {
    console.log("Reading a user from a database...");
    callback({ id: id, gitHubUserName: "ta2lsm" });
  }, 2000);
}

function getRepositories(username, callback) {
  setTimeout(() => {
    console.log("Reading user's repositories form GitHub...");
    callback(["repo1", "repo2", "repo3"]);
  }, 2000);
}
// Yukarıdaki örnekte her fonskiyon çıktısı bir diğerinin girdisi olacak şekilde yazıldığı
// için getUser() fonsiyonundaki gibi iç içe çok fazla girdi olabilir. Bu da pek istenmeyen bir durumdur.
