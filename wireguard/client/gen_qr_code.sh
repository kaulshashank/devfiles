#!/bin/bash
path_to_config=$1

qrencode -t ansiutf8 < $path_to_config
