#!/bin/bash

umask 077;
wg genkey | tee privatekey | wg pubkey > publickey

echo "Your keys are saved to files 'privatekey' and 'publickey'"
