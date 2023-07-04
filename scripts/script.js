document.addEventListener("DOMContentLoaded", function (event) {
  event.preventDefault();

  // Selecionando os elementos HTML relevantes
  const nome = document.querySelector(".profile-name");
  const user = document.querySelector(".profile-username");
  const bio = document.querySelector(".profile-bio");
  const repositorio = document.querySelector("#repository");
  const followers = document.querySelector("#followers");
  const following = document.querySelector("#following");
  const avatar = document.querySelector("#avatar");
  const link = document.querySelector("#link");

  // URL da API do GitHub para obter informações do usuário
  const url = `https://api.github.com/users/jooysoouzaa`;

  try {
    // Fazendo a solicitação GET para a API do GitHub usando fetch
    fetch(url)
      .then(function (resposta) {
        return resposta.json();
      })
      .then(function (json) {
        // Atualizando os elementos HTML com os dados do usuário
        nome.innerText = json.name;
        user.innerText = `@${json.login}`;
        bio.innerText = json.bio;
        repositorio.innerText = json.public_repos;
        followers.innerText = json.followers;
        following.innerText = json.following;
        avatar.src = json.avatar_url;
        link.href = json.html_url;
      })
      // Tratamento de erro
      .catch(function (erro) {
        alert("Ocorreu um erro ao buscar o endereço, tente novamente mais tarde.");
      });
  } catch (erro) {
    console.log(erro);
  }
});
