### Testing task 1 code:

  Carry out static testing on the code below.  
  Read through the code.  Comment any errors you can see without correcting them.

 
def func1 val 
  if val = 1
  return true #indentation
  else
  return false #indentation
  end
end
  
dif max a b #shoubl be def
  if a > b
      return a 
  else
  b
  end 
end 
end 
  
def looper 
  for i in 1..10
  puts i #indentation
  end
end
 
failures = 0 
 
if looper == 10 
  puts "looper passed"
else
  puts "looper failed"
  failures = failures + 1
 #needs end
  
if func1(3) == false
  puts "func1(3) passed"
else
  puts "func1(3) failed"
  failures = failures + 1
end 
 
  
if max(100,1) == 100 #should be (100.1)
  puts "max(100,1) passed"
else
  puts "func1(3) failed"
  failrues = failures + 1 #failures and not failrues
end

  
if failures #missing comparation(== or <= or >=)
  puts "Test Failed"
else
  puts "Test Passed"
end


