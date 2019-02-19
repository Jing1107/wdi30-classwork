def fibounacci_recursive(n)
  if n == 1 || n == 2
    1
  else
    fibounacci_recursive(n - 1) + fibounacci_recursive(n - 2)
  end
end

require 'pry'
binding.pry
