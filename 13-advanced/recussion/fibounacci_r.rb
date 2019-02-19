def fibounacci_recursive(n)
  if n == 1 || n == 2
    1
  else
    fibounacci_recursive(n - 1) + fibounacci_recursive(n - 2)
  end
end


#Memoisation
def fib_m(n)
  if @results.nil?
    @results = {}
  end

  if @results[n]
    @results[n]

  elsif n == 1 || n == 2
    1
  else
    answer = fib_m(n - 1) + fib_m(n - 2)
    @results[n] = answer
    answer
  end
end


# Interative recursion
def fib_r(n, a=1, b=1)
  if n == 1 || n == 2 #base case
    b
  else
    fib_r(n-1, b, a+b)
  end
end

fib_r(50)


require 'pry'
binding.pry
