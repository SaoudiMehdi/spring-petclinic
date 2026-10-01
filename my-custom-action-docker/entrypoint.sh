#!/bin/sh
set -eu

message="${INPUT_MESSAGE:?Input 'message' is required}"
output_file="${GITHUB_OUTPUT:?GitHub output file is not available}"
delimiter="ghadelimiter_$(cat /proc/sys/kernel/random/uuid)"

printf '%s\n' "$message"
printf 'output-message<<%s\n%s\n%s\n' "$delimiter" "$message" "$delimiter" >> "$output_file"
