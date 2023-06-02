#!/bin/sh

CURRENT_PATH=$(pwd)

cd $CURRENT_PATH

nvm use || nvm install $(cat .nvmrc)
yarn
yarn build

cd $CURRENT_PATH