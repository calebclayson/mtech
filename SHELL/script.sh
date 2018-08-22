# newJason=Jason1
# newJason2=Jason2
#
# echo $newJason
# echo $newJason2

if [ -z $1 ]; then
  echo "sorry charlie"
  exit 1
else
  continue
fi

echo enter your username:

read username

echo hello $username

echo "super script time!"
