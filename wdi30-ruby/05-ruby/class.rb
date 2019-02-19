require 'pry'

class Actor
  def award_speech
    "I would like to thank my parents and my agent. We did it baby"
  end

  def deny_allagations
    "I deny that and I was drunk and I don't remember"
  end
end

class MarxBrother
  attr_accessor :name, :instrument, :vice #Macro -writes the getter and setter for you

  # #Getter
  # def name
  #   #return
  #   @name
  # end
  # # Setter
  # def name=(n)
  #   @name = n
  # end
  #
  # def instrument
  #   @instrument
  # end
  #
  # def instrument=(i)
  #   @instrument = i
  # end
  #
  # def vice
  #   @vice
  # end
  #
  # def vice=(v)
  #   @vice = v
  # end
  def initialize (n='',i='',v='')
    @name = n
    @instrument = i
    @vice = v
  end

  def perform
    "My name is #{name} and I play the #{instrument}"
  end

end

class Stooge < Actor
  def terrible?
    true
  end
end



groucho = MarxBrother.new # Create an instance object
binding.pry
# groucho.name=("Groucho")
# puts groucho.name #=> "Groucho"
