let option;
let vacancyAvailable = [];
let allCandidates = [];
let candidatesEachVacancy = [];
do {
  let vacancy = {};

  function listVacancies() {
    if (vacancyAvailable.length > 0) {
      for (i = 0; i < vacancyAvailable.length; i++) {
        alert("Número da vaga: " + (i + 1) +
            "\nCargo da vaga: " + vacancyAvailable[i].office +
            "\nQuantidades de candidatos de todas vagas: " + allCandidates.length
        )
    }}else{
        alert("Nenhuma vaga disponível");
      }
  }

  function createVacancy() {
    office = prompt("Qual o cargo da vaga?");
    description = prompt("Descrição da vaga");
    date = prompt("Data de encerramento (DD/MM/AAAA/)");
    if(office.length <= 0 | description.length <= 0 | date.length <= 0){
        alert("Algum campo ficou vazio :(" + 
        "\nPreencha os dados novamente")
    }else{
        let confirmation = confirm(
            "Confirme os dados da vaga" +
            "\nCargo: " + office +
            "\nDescrição: " + description +
            "\nData de encerramento das candidaturas: " + date
          );
          if (confirmation) {
            const newVacancy = { office, description, date, candidatesEachVacancy: [] };
            vacancyAvailable.push(newVacancy);
         }else{
            alert("Crie a vaga novamente");
         } 
    }
  }

  function seeVacancy() {
    const index = parseInt(prompt("Número da vaga que deseja visualizar"));
    const confirmation = confirm("Visualizar a vaga de número " + index + "?");
    position = index - 1;
    const find = vacancyAvailable.find((element) => element === vacancyAvailable[position]);
    if(find){
      vacancy = vacancyAvailable[position];
    const candidatesInText = vacancy.candidatesEachVacancy.reduce(
      (finalText, candidatesEachVacancy) => finalText + "\n - " + candidatesEachVacancy,""
      );
    if (confirmation) {
      alert(
        "Informações completas: " +
          "\nNúmero: " +
          index +
          "\nCargo: " + vacancyAvailable[position].office +
          "\nDescrição: " + vacancyAvailable[position].description +
          "\nData de encerramento: " + vacancyAvailable[position].date +
          "\nQuantidade de candidatos: " + vacancyAvailable[position].candidatesEachVacancy.length +
          "\nNome dos candidatos: " + candidatesInText
      );
    } else {
      alert("Selecione novamente");
    }
    }else{
        alert("Vaga não encontrada")
    }
  }

  function subscribeCandidates() {
    const index2 = parseInt(
      prompt("Qual o número da vaga que deseja inscrever o candidato?")
    );
    position2 = index2 - 1;
    const find = vacancyAvailable.find((element) => element === vacancyAvailable[position2]);
    if (find) {
      newVacancy = vacancyAvailable[position2];
      nameCandidates = prompt("Qual o nome do candidato?");
      if(nameCandidates.length > 0){
        const confirmation = confirm(
            "Confirme os dados para inscrever o candidato " +
              "\nNumero da vaga: " + index2 +
              "\nNome: " + nameCandidates +
              "\nCargo: " + newVacancy.office +
              "\nDescrição: " + newVacancy.description
          );
          if (confirmation) {
            newVacancy.candidatesEachVacancy.push(nameCandidates);
            allCandidates.push(nameCandidates);
            alert("Inscrição realizada");
          }else {
          alert("Vaga não encontrada");
          }}else{
            alert("O campo nome está vazio")
          }
      }else{
        alert("Vaga não encontrada")
      }
  }

  function removeVacancy() {
    const index3 = parseInt(prompt("Digite o número da vaga para excluir"));
    position3 = index3 - 1;
    const find2 = vacancyAvailable.find((element) => element === vacancyAvailable[position3]);
    if (find2) {
      const confirmation = confirm(
        "Deseja realmente remover essa vaga?" +
          "\nCargo: " + vacancyAvailable[position3].office +
          "\nDescrição: " + vacancyAvailable[position3].description +
          "\nData de encerramento: " + vacancyAvailable[position3].date
      );
      if (confirmation) {
        vacancyAvailable.splice(position3, 1);
        console.log(vacancyAvailable);
        alert("Vaga removida com sucesso")
      }
    }else{
        alert("Vaga não encontrada")
    }
  }

  option = parseInt(
    prompt(
      "Selecione uma opção: " +
        "\n1 - Listar vagas disponíveis" +
        "\n2 - Criar uma nova vaga" +
        "\n3 - Visualizar informações completa da vaga" +
        "\n4 - Inscrever um candidato em uma vaga" +
        "\n5 - Excluir vaga" +
        "\n6 - SAIR"
    )
  );
  switch (option) {
    case 1:
      listVacancies();
      break;
    case 2:
      createVacancy();
      break;
    case 3:
      seeVacancy();
      break;
    case 4:
      subscribeCandidates();
      break;
    case 5:
      removeVacancy();
      break;
    case 6:
      alert("Encerrando...");
      break;
    default:
      alert("Opção não encontrada");
  }
} while (option !== 6);
