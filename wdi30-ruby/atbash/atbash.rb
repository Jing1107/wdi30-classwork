require 'pr'
=begin
Atbash Cipher
The Atbash cipher is a simple substitution cipher that relies on transposing all
the letters in the alphabet such that the resulting alphabet is backwards. The
first letter is replaced with the last letter, the second with the second-last,
and so on.

An Atbash cipher for the Latin alphabet would be as follows:

Plain:  abcdefghijklmnopqrstuvwxyz
Cipher: zyxwvutsrqponmlkjihgfedcba
It is a very weak cipher because it only has one possible key, and it is a
simple monoalphabetic substitution cipher. However, this may not have been an
issue in the cipher's time.

In Ruby, write a program which seeks a user's input, and encodes/decodes the input.

Examples
Encoding "test" gives "gvhg"
Decoding "gvhg" gives "test"
=end


class Atbash
  def initialize (input)
    @word = input.downcase
    @alphabet = ('a'..'z').to_a
    @reverse = @alphabet.reverse
  end
  def encode
    message = ''
    @word.each_char do |letter|
      index = @alphabet.index(letter)
      cipher_character = @reverse[index]
      message << cipher_character
  end
  message
  # def reverse
  #   str = ('a'..'z').to_a
  #   each_char.to_a.reverse.join
  # end
  #
  # def reverse!
  #   replace reverse
  # end
end

puts "What's your secret word?"
word = gets.chomp

cipher = Atbash.new(word)
puts cipher.encode
