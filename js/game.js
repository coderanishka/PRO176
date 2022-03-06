let words = [
  {
      'inputs': '7',
      'word': 'Anishka',
      'clue': 'My Name!'
  },     
  {
      'inputs': '6',
      'word': 'Laptop',
      'clue': 'You use me to code!'
  }, 
  {
      'inputs': '5',
      'word': 'India',
      'clue': 'Place of huge cultural diversity'
  }
] 

$(document).ready(function(){
    fillblanks()
})

function fillblanks(){
    const randomWord = words[Math.floor(Math.random()*words.length)]
    $('#blanks').empty()
    for(let i = 0; i < randomWord.inputs; i++){
        let input_html = `<span class = 'fill_blanks' id = 'input_${i}'>_</span>`
        $('#blanks').append(input_html)
    }
    $('#clue').html(randomWord.clue)
    var gameOver = false
    $('.clickable').click(function(){
        var correctGuess = false
        let id = $(this).attr('id')
        var life = parseInt($('#life').text())
    
        for(var i = 0; i < randomWord.word.length; i++){
            if(randomWord.word.charAt(i).toLowerCase() == id){
                if(life > 0 && ($('.fill_blanks').eq(i).html() == '_' || $('.fill_blanks').eq(i).html() == id)){
                    $('.fill_blanks').eq(i).html(id)
                    correctGuess = true
                    if($('#blanks').text() === randomWord.word.toLowerCase()){
                        $('#result').text('You Win!')
                        correctGuess = true
                        gameOver = true
                    }
                }
            }
        }
        if(life > 0 && correctGuess != true && gameOver != true){
            life = life - 1
            $('#life').text(life)
        }
        else if(life == 0){
            $('#result').text('You Lost..')
        }
    }) 
}