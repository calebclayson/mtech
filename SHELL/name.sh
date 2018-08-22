echo "what is your name?"
read name

if [ $name != "caleb" ]; then
  echo Hey $name
  exit 1
else
  continue
fi

echo you are lame