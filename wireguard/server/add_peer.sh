#!/bin/bash

device=$1
public_key=$2
private_ip=$3

wg set $device peer $public_key allowed-ips $private_ip;
