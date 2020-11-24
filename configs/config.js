require("dotenv").config();

module.exports = {
  db: {
    client: "pg",
    user: "docker",
    password: "docker",
    database: "book_store",
    host: "127.0.0.1",
    port: 5432,
  },
  server: {
    port: 3000,
    migration: "/db/migrations/",
    seed: "/db/seeds/",
  },
  jwtKey: {
    admin: `ewogICAgImtleXMiOiBbCiAgICAgICAgewogICAgICAgICAgICAicCI6ICJ5Y1h4QnNuQ2E0UURFdmlkSkd2MF9TOXo4OHVzNV9vcDJ6b2JfZkQ2Zm02bEp2ZmlhYzJ5UC15VnpTNVNfcUFHUVBKWHd5SHN6SEY0Z1JhSGFOa2xtckV5bWI0UHdWYjA0M1hRUlFRdjc4OWZmZWx1S0dXRGZzVGNzTjVxY3otWU1KaG1JQ01pOHZrOFRsVlZwdUZ4NXNCazhDNVp3LTM2aks3M20xd1cwVEUiLAogICAgICAgICAgICAia3R5IjogIlJTQSIsCiAgICAgICAgICAgICJxIjogInVXRWE0Ul9VaXFxMEJRZFJUZEg5aU84amhvZ2VTek9tNktYQkVtUnMteGx3a3d4RWdfdTBxV2hlSXQyWndnQUg1ZzBkTXY3SHJWMEdMRm9NYlBNbzlkYjdoQlBiZWtGN2ZhamtFWE9yQldicTRMZjhyelhNS3hTRFMwQWplVEo5TVhZanZlU0JBLURMSEF6dnAydHpKV29wWFVtVGhzbHlESkVaY2ZRdnhMTSIsCiAgICAgICAgICAgICJkIjogIkMyNHU4VE1WZmFDMmlJQWpEV29YdlZ4THR4a19DZEJpT2tBWkhFTGNaSFF5al9vRkdWcEpoSmxneXRBNmVBdGQ4UGZ4bTdqc21OdEExV0ZQY0IyUnlKSVBaYmt6WThIcXNJM25iX2UwYlpRSnh4NkQyTFhyREZTcF9BS3N5U2xyZ2F2WkwxTzQ1VC0wd0VYeElGZEZXR1JuVWFESExCckFMSmUzYXRFX0JEa2MyUTdqODB1Y083RXRzVE1EXzkzMjFEdVVCVVlBZlBsM2JacjI5dUtYRlNnVS1YNUUyRHE5S3pEZHVkNGt4MjN5SEdJaG9nbWRqclpyRDlhM2NEUk1zNF9mZW9oVHV1eTZpTFE5WWZOVU81YUM4ZHVkcXUtSzA5Y1BpWWgxSzJKcXliRHA1R19EbExQY2x3Q3Awd01hQV9GcnAyemhlQ1RtYXQzaWF6M25vUSIsCiAgICAgICAgICAgICJlIjogIkFRQUIiLAogICAgICAgICAgICAidXNlIjogInNpZyIsCiAgICAgICAgICAgICJraWQiOiAiUURPNktPOVRRb1ZmYWloaFc4eFVaQUthcEpOeFk0eFdJNV90ZW9UYjB5ZyIsCiAgICAgICAgICAgICJxaSI6ICJWdmM5Z2hfeS1KUUVkc2tHYkQwNGlvZWxfeFFZNk9VUXVJcDU0M1JhemhMZGptcTdkcGQ2MXdELUxyVVVmbl8zeEJ3YWdjQWs4RGNzWVQ5THV1MW5zREtUUGt6SHpJanUyQ2pFSnFyLUQ2ODRrOW1KcWdadUVaVUpNZ1BLWThxXzVQZjhPdlk2WlFSaFhzTG1sS0FXTGlCZDBhYnNNOUxyVzRwV1ZEb0YtNk0iLAogICAgICAgICAgICAiZHAiOiAiYlk0TVVLTTc3U1RBaG94MnhrX1h0YUVPVkZGQ2tMSkVCOFNGYmx4cHBqeHRiN3NvTkVwN2ZqbjNISEVLbnpaRUx2OW1wNHpFQmoyV01JRUxCT0xpaUJ1dVhjdlV3aVYwMGd3bUNWTThzX2prNEhqZVZ4REhWUTJPeG5uOVVwWTFEQzJ6UmJfT09oOFpuMjYyRXVaVjhmU0UyZVJRMlJGZC1RVUhiRk9VRUFFIiwKICAgICAgICAgICAgImFsZyI6ICJSUzI1NiIsCiAgICAgICAgICAgICJkcSI6ICJIclhZaHgwSHotVVJwNWVidjRHZk45VXVGSFp1VmxUN1BLVmhBOVFCUGVQc0EyQlA1WEdJYjF3cjVDakQ5U0NlTGwxVHpnUHBQbTRmdks4NlNiNUt0ZGRrbVdfVXR6OHIzeGhnbUFlS2VIMmhRWk1aV0VsWVJuYkNmV19sc0lsTnRpajFLTnMzQ0Zad0wzaHhKMUlrcERrZkd5WTZPMlVaOEwwRTh4elo0UU0iLAogICAgICAgICAgICAibiI6ICJraHlVWGNYcDl6amhXa0tXTEJqUzRtUnFuN3JOTENrbFZLYUtWQzczN1VGUHYtcXUxR0VDeWw0OW9CVUpEUi0wdUQ0TFJKVTJROHpCS3VZR3d4VnFhVmtnWlJkNU8yOGUxTmEwdnhpSlJzYkx4MzN0Rms3SHZVYmViZnVMd0RLUWRRSDlkbFZrOWVUV1RsUGE5dnR3eDJvd3ZDWEowWFd6LUpySjgxbTRFbU1oNU4tM2ZPcVM0aVAyMEdHX29Wd1FmWHQ2a2M5aDNTeG84ODVQX1RQWF9XSDZtMDY5eHZ3SENhaFdQbGx2cWlDME9LUU1RWVhFLUdMbmVTZVkwOVZnSkNWSDFUUmxXZGoxbHEzWjJSdWc3RlF1MEhzbGJZakdCNXNzTzdiYVVBSnE1bTJ2WEhVVVNPWkdocThBc0xSZGpxUU5mNHNTSlNTR2R0dFctQnpKUXciCiAgICAgICAgfQogICAgXQp9`,
    user: `ewogICAgInAiOiAiOE9hbjhwWTVTVmNfZzYzS3BxcjBoc2FxYUZuRkM1YzdOWElDSklDYkk1U3hFT1dYaS1jbHVlX1BTc2xodTJReEpWMVZyR0JMbjhIM2NDVmtNVUNaZFJoVkc4X3JYRDNqVFZMUVZ3YjZ6RHByS2hhUzJqZy1GcHZ1SW1RMm9EbWR6UGxpd3RHM1U2LWk5U0JPS2JkNUZvU1RHdHdFcnI2X2tLczRTT1dTeElrIiwKICAgICJrdHkiOiAiUlNBIiwKICAgICJxIjogInI2cEV0Q1lfdzQxREp0RGI5enY2UTFjMlZJNGl1cExJcmdnb2NKbGtxSDg1cG5LLVNPdExXR2Q4MkxKQmNjX0Q1YmFDRFVUM05GS0FmSXZsVk4tdE9jUVYzUmxtM2RoTDdSUGtYN01QdzU4M3UyZ2xYSlNSaFpnb202cmVtb0xhdUZCRDdmRzZKWmtSWHJIdkZJeUJWMXJnQzI3TGhRMXZ0WF84bUd5UWcyMCIsCiAgICAiZCI6ICJCM25pZUY5YUwyZ25qcFcwczVmNDhsRUctNTA0ZFNyWEF4QWtINk9OeFFTNGJHLW1PbVhUNE9memkybmhtd18xSW5hZUVmUGR5Y2FGT3NhN0Q1d2tOME1Oa04zZm01N0hRU3VrQlhRZDg4QnZ0ZlpFa0EtbmpXZ3Q5UHh1QUE4NWU0aGNnRWxwRW1mODNIVkNzYnVfZFhwOHNpZUZqMjlnS21jeFdoeGctTS1nVmwxWWNyekRXVFpKU2RSY3BGWU1rWkt2Sjk5WGl4QXNZVTNfeHZRbGJjNzRWbWxNbnlDSUZNWnVwNjEyaEhESmlfdWF3bnYxVVBWejFnSmk4d0FZQkVvbEU3MkdKSVNhbjdhaUtkRDdOajhhOU85ckE5S1IyQ2F1NVhHcExMcHVsaHBNQ0g4ZDFTdllVZlA3Y0Fsb2JvejNWVVVQbm5RWjRYb01BQWpyZ1EiLAogICAgImUiOiAiQVFBQiIsCiAgICAidXNlIjogInNpZyIsCiAgICAia2lkIjogIm1sM1VnbElrdHVDcGsxQzBBa2hkdldFWnNneU01YXV2U3hmd3IyaDNoQlEiLAogICAgInFpIjogIm5Xa1pRNk11akxZRmtkaG9KSWlsdEFqRF9HenlldTFwdHIwTzJDZmdiNGZERW1XRTdwQTJmbEF5d0dsMFplZUdtRkcxdEZ6NWNaeFNlS1A1ekdfQ0VKWnJ0NG5GTGlZV05RTFZSSnF5WkF2eHVsR2p4djFSNFRkV0M5NGRFSUVudkx6dUV0dHVwOU9fQUZmWS1EY2V6MU50Sm5wOW9IUkdsV2pkUzY2YjVURSIsCiAgICAiZHAiOiAiS2p3bVFjLTRwM1VXZTUyaW8tbmhDU2dYaEVnSTFlbGp4aEVBOHlsaENiSHVBVXBmY1hYTEZYaEgzWkxGQWJlbExpblk5V25FbUhQSFRfQWVTc3hLbTA3eXpQZDlDaVVIanV6dl9mSUpVbmtEaE5PRVY2SDRzTG9SM0JHNXlnbVA4dm5lS00zZjJGbzR0Y1UtTHU0dDJwYlB1NnZMWGwtdThrd3lpQVZINEJFIiwKICAgICJhbGciOiAiUlMyNTYiLAogICAgImRxIjogIkgxOFJGZnNldUJXcVFHeGNYRExoNXRUVVp4VmJMbWE0WUJ3azNMY0lPdTg5cEhRcGQyeE44R1BLOEFnbGwtVzYzbk5SbG4wU2lNMlRGS3NITWJrZ2ZvaC1QeFlpUU13NEF3YmlhaFRZWTk4elhNeWtuM3dJNFFyamRhbDJSN0hHemRQSHpkNjFsN0ZXWU1yMkgzMVlPX21HdVlQMzVMTVptQmhiU18xWGNhRSIsCiAgICAibiI6ICJwVTNtb1NhUnIxd25ScFk0eFZPbkVHaHlhTEtlYjRkeGUwTk1WUFhCM1BubjZwWXJCQ2FMZHRTQ01OWHdpUEhhTk5ZLVBFZldWcjN0ZE1TOGZQNmFZS3ZHVEUxdHBWaFljQzl1X2tqWVFqRmJhZU15cEI4UFN2SWdPdkFGT1hTUFJEZjRkSmR2NjF6ZTMxemNWQ21QZXRBcWpLRDM5c0MtS3Npend2X3J1RExJMEVyZFZENG5VZEt3Q0V0SFAwTXFJSlBDVHhMb2t3UXZuRHFSWWpLZG0yRU9MZnVUNktibDR4YUtSY0M3V19rRDQ1TTJNc3YzWmVVcUpDMmZkMEVTQy05b3FmcEsySlM1a0o0VEFpd3BoWW9nT3QyRmdQRkRfdTQ5Tk1uTHNzTnVMOUVGX2huc1duZl9WWXdoOEJtUUVsc2c5U3NqM1JiR0lkOVVNeF9KVlEiCn0=`,
    manager: `ewogICAgInAiOiAieU5xd3ZPVEtudzA3QWQ4NTE1RmRZNTZvQzQyTEVWWUY3Ti1BcXZYNjRrRlpIMzItdEhmS0E2elNKYWlQd0NaYWtlZmYxYThSRENtWWtQWnRMbjNheDRfU3RnYUYxa0VHUTUtTTlwMmRFZUYzQVBScGJoQzBTMnI4MzlzVzByOHRUSzIzWm1WQS1lNWJ2TktnYzRCUlJRQUh5bkhxSEFwbGtseTJUcTM2ZndNIiwKICAgICJrdHkiOiAiUlNBIiwKICAgICJxIjogInN6eDhSd1JxVW9tMEtjS25rYUxFdGFBbzBKcDAwZ09GY1RtSXk0aTRYczNZVFhsWFNMVUVfUHVmS0J1VUhCQ3hZYmVNemhTcVZfZDh6aFpSWUpDR2RYZGZYdmtvOC1TMjVCdHFaZW9mY3F4bThzeWczcXhzaHBMXzNJcFl2dVJZdnpadDVvQUJHTTJsa2stZDBRb0JvQ1BvUmxzeHRfaFVTUUxaUTlSeWRJRSIsCiAgICAiZCI6ICJMekdhdDVDTXM5ZDRsZFJITlIySW44VkMwU0pMZkgyRHV6bS1yLWNUbHVzQXRaWkozMlRfWXpDVHJLZE9nQmM2SUNhbWsyVXJLd0tYcEs3dXZ5c09LMkN2MEozTzJHeGh3a000dWxSOHJjTERVMURnZkZyWXVuNXIxYjlBbWJELXpXYWJRWlNXMnA0ejdFWTRlNUFvSGdSWlplQlNtZ1FNaTI0cUZGUFBibi1BSzNKdTVrdjFfRk1YaUY2QWN2WExNajV3ZWZ5ZE5JYWUyNnFFSHJpanl6c2NNVzhER0VZWUxKZEJDWjRpNlNoZjlQZnRwUFFiQWtXcHAxU0p5LUozOEhrZFpKcDF0N3hyRlBhTU9OdTNLSTVZRThBSThlX056WUpwWHRmRjJVS3FmbkdkcXQza3hBckloaWZXR01rc3c1d1VXZHNWbU5jNEpsLVZyQnY2QVEiLAogICAgImUiOiAiQVFBQiIsCiAgICAidXNlIjogInNpZyIsCiAgICAia2lkIjogImZTQmdkZ1RkWHdTOUhqdWFCWEE3MU5nT3BGSE16RmIxNVp6UUdYOUVEYzAiLAogICAgInFpIjogImkyX1V4SDU3c0d1allscGVrSnQ5MTk3bjI3MnJiMGhLelV2b3A0X1pONFA2UGp5elRLTXdISVl0MUlHV0VvWUx0UUZJb2ltV0thZlI1NUF2S0FEbXhfdnBNbVFxRHNReG96TnhnZEJ3NVZNVE9RdjZDa245U2VmMlRZaHBfMjJxenFBVXNkUHRJZE1VZkxVR0pHeklxbUdVVlM4VThnVFlTUmJmLVNSMEhOTSIsCiAgICAiZHAiOiAiRmF5RHBkNktmdDlPbnNVWDJNczI2S2tXT1Nqcy1OSHZrY0FNZ21aSXpHR0EzSVVWTHlRLUNHZDl4ZEtLc0pGeTlJdXctNzRJZU9lRUx5Qm9aN3ZzXzl2bFFQOHpNZ3VTUVhuV0hFYWx6R2dvRDFKUWppX19SS1FtNVlFZTFWOEw1RnBha0JJZEVOdEh5dmh2bUFjZ3ZmRmk1ZFdsRGFHUmxGbXMwcEN6bDBFIiwKICAgICJhbGciOiAiUlMyNTYiLAogICAgImRxIjogIlpaOTN2elJMckR5VFA5SXpfQ2pUYXo5QnBQVE9JMzBIbmVqSEhNLUo2WWJBaXp5dk5uUWNQZXZVazRMX2VPSW1FSWRuZURqVFZFam9KRmtYRHE4aTdWc2ZZZFBYV21GbEtQUTZZVXBiUmtObG8yaE9GYktoWGJQZkNnWU94enprN0pWSnZwVDVDajBmRVZPLTRSVFJVeURJdzR0Vkp6X1BXZzRaYlpINHl3RSIsCiAgICAibiI6ICJqS0JlVnlYNHBmdFpZaTJMd3JFSXlwaXh2WWNrYXVpX0xTZkNlQ1A3eVZNSU9YRHJwb0NJYXVXb2ZDaWlxc3VmNVpCaW9reDZjelNTWHRLSGdqaUpnN2tWSVJrMGVVWmw1bWVJbUsybWZxMmd4Q2JmcmdEWnhLRGlzWV9xVUp4WkZfaDNHUkhjTUFPRmZON2g5NnhzcFQyRkVObk4taW9lVGFUYlVXSGl2ZWR4ZG9peE8zQkRGOHZtcG5HUWhBZWgwdnVoelBITGVvMVcwSlhQVjUtYzB1OGV3UG5mdmZHM2hlbS0wY3VYbElEOUVRQnNJMG9wU0x4Tl8yNVVOaXEzZkt5VE1QeHp6cjhld3J5MlE1OEFCNUJ3c2FkeERjYVFkQnVYUjl5RjVSVmZjLVV3NjNINkxKbkxMUFN2ZmR4c01RSFR2VXV1X3Z6UnJ6Zl9PQjFjZ3ciCn0=`,
    employee: `ewogICAgInAiOiAieHNld0NHMng3NEFoaFZvcDJlOExuTW02c2I1SFVacEVuTlgwbEFkUFZHNDl4R3FyX3BpSklIS0s4S3JxWGh4LVlKRFZmUDd5WFVNcE80cE5jUVYwMjVCTEljT3cwbmFpanE0clF2LUFoOUdDcE9YUFZDOGZZb2VTcTRzaVZqQ2Z3NWFiOHhXeFBzMFl0R0wyUS1zb094YzNuOUpLN04wS2d3SFplMnNrek44IiwKICAgICJrdHkiOiAiUlNBIiwKICAgICJxIjogIndYS29QVi0xdzNZM3VfTnl2TVhLbEtxcHlSVllUS0RpajZ2YXhuaF80R1NoM1F5MnZaMVl3ZHdRSUJpVGRieUFKRG1nWlI1U2xucVIyTFV6bWdMd0V5MTFIdnBiUFZnRC0yQU1NSnVKcUNLU01CTW9wOVA0OE1TNE9iXzQyTnExdmhxajlsSFpyQ00wb2MweTFuSENuNFBNQ3lHM1hHNDlmMnhzLTJablgyRSIsCiAgICAiZCI6ICJNV3JVMWI3LUE0XzVSZUpuT09IeFhUMEhfMGdaV1h1MTlibVluYmlQNmFrZ08xZHpNM3k0blRVRGJqWFdPODhCU2t1elJEUUs3VmhlODMxZEhwZlJpbFFLd0RaUW1PeUx6MWktUjNPaWc3THpEN0FIRFJzSmVMaU02NkVxSGNTMzhCZl9wckxEVWQ2QXFmSi1Rc1hOTHhvTDdfVHAxSjRNUGJSalZRdUItWWY1cjBiOTNaNjF0YVdnR3VIWi1wRVo3ekZWUl84UGZVbkdQYjNDOUItMnFZMmQ1dDJZUEpzNHNMakFvU2IxZno2ZzItR3pSaFQ1ZTFWOTEtcHh6NmhNYlVBVGQ3Tjh5Q1ZMMFZGa2N5TXBDRnF4VDVKNmdWd1A5cTR1NnNPUE1Rc1pOcF8ta0VQSm1nLXBqVWdUeTF6R0I0cG91ZFpJUzJucF9wU0xJWURiUVEiLAogICAgImUiOiAiQVFBQiIsCiAgICAidXNlIjogInNpZyIsCiAgICAia2lkIjogIktOUXE0amZ3VjVWWGlvUEpSMW5hRzFURnpjS0l2RlVOb0JLNEotZUszUG8iLAogICAgInFpIjogIlZaY3VHd1kwRDQ2RERJMFczaDNfdEF4c3lLUWF3Vm45ZXBGY2N6emxBUDJaTXNYWnJaaVVaaFp4UkNjTFVsMDVMc3g5MGxpWXFQUWF6UGpOZ19RbXcwdXN3YkxmNENJM1ZrUDhjb0g5M1UzcVllVWMyeTZrS211UW5FaHM0ODhGa0FZR0RYV1VFOE5IMUJjQ3lpZ1l3S2FaeV96YjFJS2tXaUtWWHhKOUlCdyIsCiAgICAiZHAiOiAiRGJfQUlFVWVHcGU5T2RFTHRnUV94Rjk3cDFHbTh6RDliLS1vbEJpUlZ5Q3M2d29KelhsVmVzWVJjQ1lTUWVJc3A1YzhfUUZSV0R3Tl9RMUszX2RscHM0ck5ER3A2RlRHVjZJYVllNzBQX0N3M2FEN256SUhOTFIxNDZHakJWMGxuOHlxQ3IxRVhqaW5iY3F1aF9JYV9VTlUySndlREpZWlpRaGF0NXVvbHZjIiwKICAgICJhbGciOiAiUlMyNTYiLAogICAgImRxIjogIk5zZ0Fhcmp5NFRKV0lDeVYzbTFvcS1jVWc3US11QnlMYkVJdmh5clNrN29MdUd5RVIzZ0tqWU9ETVlPa0pxQkY3WHhBTnNKNmd0Q2RBckIxdDNTRGhmckdnd3BFMGo5ZGlVOHV4SWtYVjN6S3gwQjFyLWt3UXdhQ1lTQkRHUzMtYjZKZHNrQ0ZrdUM1WS1TWE1fRXRPeno0aUdKNDZYenlmMlkyQ285NlVLRSIsCiAgICAibiI6ICJsaldUUlhIZnRoT2wtWnU3T0s5ZkZWMWYxVUhlWHJDeEVsQ3g1cmxRWDNrOHBIY01UTXVtNE5RRVhETURUdlhRV3lhd21pZVRRZFE5RXhXSWtfUEx2RXNsb1NVakstaThzR1ZxelhSU2ZOcG9CSUJEbUtIV19KM0tzT204REdIQzNMbEVqWUxDd05IektJLWZMUzI1T09BMEs5aW1Qb1gyOHhub2I4ajl4Sy02VFBKSVplT0Jlb200Q3NiQ3p3ckFGSUhKNkJ2bXpnUlI5aWdJRDhmczdCaUNXaWpYbmMyR1hCQThPd250blhhSkFBUUNKVmliN2hFT1FjTnZiejMwSFUwalZGX1NXTUwycC1zNDZRMzNEUVlkNy1JVVFXT1lFS2VmRE9WVGRIYXItRW8tWllRNE9Gb3o1YndBRHBXTWl0a2QtUDd0ZjRDalYteWFpTEZoZnciCn0=`,
  },
};
