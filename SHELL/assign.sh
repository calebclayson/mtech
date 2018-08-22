newVar1=textfile1.txt
newVar2=textfile2.txt
newVar3=$1

if [ -z $1 ]; then
  echo "failed value not found"
  exit 1
else
  continue
fi

echo "enter username:"
read username

echo "enter password"
read password

if [ $username != "caleb" ] || [ $password != "password" ]; then
  echo "login is incorrect"
  exit 1
else
  continue
fi

echo Authentication accepted, thanks $username now lets get to that script.

echo "the script is starting"

mkdir newDir

cd ./newDir

echo "init file message" > $newVar1
echo $newVar3 > $newVar2

mv $newVar1 ../
mv $newVar2 ../

pwd

cd ../

mkdir TXT

mv $newVar1 ./TXT
mv $newVar2 ./TXT

rm -rf newDir

cd TXT

cat $newVar1
cat $newVar2

pwd

ls -l

echo "Script finished. If variable 1 and variable 2 are in TXT folder you passed"
