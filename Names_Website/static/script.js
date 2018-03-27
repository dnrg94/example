var names = ["Diego", "Nancy", "Orlando", "Ana", "Mary", "Crimy", "Nico"]
    var text = ""
    var name
    for (name in names) {
      text += names[name] + "<br>";
    }
    document.getElementById("demo").innerHTML = text;