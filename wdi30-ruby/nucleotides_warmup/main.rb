require 'pry'

=begin
Nucleotide Count
DNA is represented by an alphabet of the following symbols: 'A', 'C', 'G', and 'T'.

Each symbol represents a nucleotide, which is a fancy name for the particular
molecules that happen to make up a large part of DNA.

Write a program in ruby that will tell you how many times each nucleotide occurs
in a string (i.e. how many times 'A', 'C', 'G' and 'T' appear in a given string).

It should also tell you if a character in the string is not a valid nucleotide
(i.e. NOT 'A', 'C', 'G', and 'T').

Example:

count_nucleotides "AGCTTTTCATTCTGACTGCAACGGGCAATATGTCTCTGTGTGGATTAAAAAAAGAGTGTCTGATAGCAGC"
# output:
A: 20
C: 12
G: 17
T: 21
=end

# puts "Enter your nucleotide: "
# input = gets.chomp.upcase
# #puts input
#
# def count_nucleotides words
# counts = Hash.new 0
# words = %w(input)
# words.each do |word|
#   counts[word] += 1
# end
# counts
# end
#
# count_nucleotides


# a = "A"
# c = "C"
# g = "G"
# t = "T"

# def count_nucleotides word
#   word = input.split ""
#   word.each_with_object(Hash.new(0)) { |o, h| h[o] += 1 }
# end
#puts count_nucleotides


def count_nucleotides input
  bases = {
  "A" = 0,
  "C" = 0,
  "G" = 0,
  "T" = 0,
  }
  dha = []
  input.upcase.chars.each do |letter|
  is_nucleotides = false

  bases.each do |key, value|
    if letter == key
      bases[key] += 1
    end 
    end
  end

  puts bases
end

count_nucleotides "AGCTTTTCATTCTGACTGCAACGGGCAATATGTCTCTGTGTGGATTAAAAAAAGAGTGTCTGATAGCAGC"
