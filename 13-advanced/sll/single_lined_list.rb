class SinglelyLinkedList
  class Node
    attr_accessor :value, :next

    def initialize(value)
      @value = value
      @next = nil
    end
  end

  attr_accessor :head
  def initialize(value=nil)
    @head= Node.new(value) unless value.nil?
  end

  def prepend(value) #AKA unshift
    node = Node.new value
    node.next = @head
    @head = node
  end

  def append(value) # AKA push
    last.next = Node.new value
  end

  def last
    node = @head
    while node && node.next
      node = node.next
    end
    node
  end

  def remove # AKA shift
    # TODO: Return nil when there are no nodes left
    node = @head
    @head = @head.next
    node.value
  end

  #TODO
  def insert_after(node, new_value)
  end

  #TODO
  def find(needle)
    # return the node with the value of needle, or nil
  end

  #TODO
  def reverse
    # return a new single linked with the nodes in reverse order
    reversed_list = SinglelyLinkedList.new
    node = @head #init
    while node # conditional
      reversed_list.prepend(node.value)
      node = node.next
    end
    reversed_list
  end

  #TODO: trickier
  def reverse!
    # destructive reverse

  end

  #TODO: tricky -- how do you accept/invoke a block
  def each
    node = @head
    while node
      yield(node.value) if block_given? # Javascripts would say we're executing a callback here.
      node = node.next
    end
  end

  # Also: .map, .reduce, .select, .reject destructive
  # Bonus: .at_index(7) similar bros[7]
end

bros = SinglelyLinkedList.new 'Groucho'
bros.prepend 'Harpo'
bros.prepend 'Chico'

require 'pry'
binding.pry
