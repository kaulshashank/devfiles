# WireGuard VPN

## Server

Install wireguard using apt. Works on Debian and Ubuntu.

1. Enable port forwarding in sysctl. Open `/etc/sysctl.conf` and uncomment `net.ipv4-ipforward=1`.
2. Run - `iptables -t nat -A POSTROUTING -o wg0 -j MASQUERADE`
3. Run - `sudo apt install iptables-persistent`
4. Generate public and private keys using the `gen_keys.sh` script.
5. Setup `server/etc/wireguard/wg0.conf` with the private key and port.

## Client

### Ubuntu/Debian

Install wireguard using apt.

Copy contents of `client/device-name.conf` to `/etc/wireguard/wg0.conf` and set values as instructed inside the file.

### Android/iOS

1. Get the official mobile app for WireGuard from your preferred app store.
2. Copy contents of `client/device-name.conf` to any file and set values as instructed inside the file.
3. Use `client/gen_qr_code.sh` to create a QR code for the configuration file. Usage: `./path/to/gen_eq_code.sh /path/to/edited-device-name.conf`

## Common actions

1. Stop and start default interface - wg0

   ```
   wg-quick down wg0
   wg-quick up wg0
   ```

2. Add a peer using `server/add_peer.sh`. Usage: `./path/to/add_peer.sh <interface_name> <peer_public_key> <peer_private_ip_on_vpn>`
