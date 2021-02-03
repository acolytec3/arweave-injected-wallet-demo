
const arweave = {
    address: {"kty":"RSA","e":"AQAB","n":"wLvYTW_cTHg7cpBiG9JgbCBRT0rIrxL7WbPRnp2HeFCNifIo6BGghGnOTffZ9Cc6o_bQO5xJba4i1RiRIL5j8OkqY4zmcXrJJyJjQEJqeFSFVbr_J_RTEaa3g0a_N1GbdOsZkSygqYA6Qv_KZLbC1IiQWn4qzqHdhnIQ8LMeYYfepnxfD6UeUWCmftFwKIfX_Tw14Nu4BYuEWMlOnDgLXu2EmaJjLYN5spHeT46cPj00ZAUkKRj2-tWR6puGE0c0bCQ6R2X50eIkm12e_U-vOiIfbL1g20BT0ZfgkDb89dBlqzd_UHqbhjeyOhtX6-O2Qk89IFwxc9c1UMUhjEeL5CXbUOVaokCZU3QcJSePmBNY1O3dgdgCr-piNwbXk4NPDP96bBtYHuNlBARmvBmuwnS2XZZoWPdUxZeRC9zW35WnMFsArdFo4hzygx5SSorxOdYFVwpZAKIZcLb0b6wi-33YYfmQB0yqvqj3cXoBCM09qS6E6pAL2jpqdrWIUprAmF1Zfe5iQvG5vAKsM3CrJn1tsf89otNTM3EtBnyNTzjfsyQcS3UHXh7sCvSiALIZfzQEQpcu7h3U-g7NhTZvVjRcNSxTCZ5--Y0sqaLq50K7XkiPBBPzRt3Mz1q6aUyNkxbS0uIiPkLFrLNwR3JAUkxIYpYyrO_Vwb8lE8H6Btc","d":"GyOYVAx3Ueaa6wk9DLvf9fnLA_D84feN9dX7ThbSjPToKU-JxmaNBXg8o6qjQd0FmzGq-r80G8H_MlCGRxJoJ56S6HezugZXLYU1wpus5bVzx7Glh5kWMBBwxjHVGn4JojoPXJY90qsKs9p-7mr0c6b95LA1aOlOtJrP8ITYYgAW2wynpMqpwpMV1BpmbQlL4bhzwcOkCFaFVAHsvtSpd-bW2tIMncu7UZN2tsSBvcXdNbmqRjCMvp9fhPtSCC7o89Kvc37-4Y4IJ5R-9HPJsdQ85pFNgodusL8ZJlWH4zlCx7bwh4LsRBxdorms9LtuM6zNZ7Fzs-MkT8j3w2AOaNrrzrS64-x-GKtb_nZSMVGbKjbQjIDmuj3MF0ap1rQZP_f-9ioITACCxi-8beR88s6WrpjUzrPzeTwZvEzjN0t3jCkigLDs53dgDXDXfgmWGz1dyW4YFp_0hswEvP5PBh6-VGI-_zPoleWn52Ug9WnHc7ere0vkNnvrmbT6X4LMY0c4toro7Y8FzZ6H31NX7plibO-0SWZDEaAwMPZDjSUpH3YE3SQFjqKETNGoFBDZOsKpP6Xgo5rxsrMCHzi5OJL5AubNOeDM_WL7whHiF3QhBdRGZ9OcLvE2hTHZZryfB8pjiAF4pwU0DQFZ9SLQ5snBR9Y5YfRpDkakmt-dK4E","p":"6q5PpPywxsfwOGEWXPBK2mbqhqpGMj5p3bG8AckR5ER6tkYiRXy8kQiecH37ST-lJbJzgkeq5tMw6xfC_wUBnS6njn1aqNPh02bD4nucd969rw6BwrfRDJaE4pfbN9xHkY5zz5hzv5r_pSekFm68GdyFuiIGU4ozHBrIQaKDHUQHJefm5dNbRgSoGl6d5aCCvTrKSoTHjhgDJnUCib7xcjDCWr_A12b_sZAtgVpV7dA-eewrUGBkRuGQJsX4Rwdcejwd87MDkTaYzgHWNRwywq90rfnFn5ipV3HfobZi3lIGquUFd07YZkTXSsKq0RS9FSCQ9aNZ1oer74o2fbMVlw","q":"0j4FL1hsWNoq7PdALfr5260-d5U7XevWS7A888Vj6ao57NbMSAZTXZfFKsrB4T_RVwASXx4v3EZeKBr-Bf4P5z-OX9NAIDTSmZTvLCq_K3iCu2wUfE3S4f9YTIKTNF7YAsPF4xREKO7Qa4ogKCs_HXRGZ4vM-rXCATDCzryjmYak7Fv30mB9uKb1XW3QQ5yJ4OLKWkzETfAigcLncjkjU0ZZreYCrjIsjCS-ige2zIkRM3MxIJv0Ll8otvhxqUGaFyRbZPg4VfBs9BCQMg8QNGTQL2VVQcOUc66jHHyGBLtr6DwvwgFxZ8vdxoHhCPmH_iDLFbr0qCtJ43YX-BdAwQ","dp":"bz51roXB3liEfJU5HpEhSmoinfc1EzgWwuovbsE7Y_M6IBEaycmZMT7erABsD4rF5Bq1Onpyfrx5odc_rddXroShFKBDS2g00hsSm9dwkjnZvJOp2v17cPYgw7CsT8xxeIQITc28gIUezdD-rUuMis3H7jWWvh7yn03qw4IfmM3YfZVyFFueFpC6htV3D5SIpN6raauLVMX5KE-rBlSm6zRFzPK8nN7MMgVgLML_nJ1sICtdVNp8bkUaKecKC9FneuHoaM7g0AMLaAvi2IYnYbX-H0IY9dBN5Y-rLGLidvR3CKdLcgTD-6aCT4P7qOSlxNANJwNp4JGrZP8lWWx8vQ","dq":"OO0EGGK3y4MfFlSIMyr-lkWdYWGt1mtx9cJ9bn_m4rDtyDwMyf-0eOYMQ97siiHue8EQOGMDEICZJADTASpegf3KfhXECjRjRaR28h2M76dMtpS4I0QrMngiH21HkGmR0YXSwf6NyguHsWaP-HBlQYNnQMgwsz2djxb12GZpYbt8UmdAfd0UjXffffGq73OmPZcKtVKN4JCBt2LfqiTgdL7ar2RVG3eIalXUpakbDNycJLMu_SZdAmVPr-MrW2ng4B0_BeLT1ikoRxlpAbTkbVtSp1KnuAvN2VjS33a0Dvn0aMhLIhuj6jfgD8zA8t4lvWCBvJuHfTVjZ0xlhw48wQ","qi":"Ttleo4Lcg1Qh7aGI7gPhcUq95a30ZHmpv5Js-odXd2OWr0xYel4YAiGXVDVkw6RfDBvsGWH6faAu75IictIxTwykwPUjWOvYKq7Xp3mUKap92YpnCOGdkHcB87mFlbORvRRzIDdiZwxFssN0Y38KMiPihPTR3llQrYRSpb0qMvqzg5QAHAIexxcOOwpg8Rk3vU0V9akqLtn6hsdAI8niB9jw5GJ_8pcCpPexjOc4SFM0FwdVy76cqUvypptBpgcadbY0IwRp4qhI40skH4_-klBYvU2O2HPl9bbyy4NxQo6psUVux6XmfAz4dtSMSICMzvswA3g4VKqxz4Lek89wxw"},
    sign: async (transaction) => { 
        let res = await window.postMessage({transaction: transaction},"*")
        console.log('heard back from the content script',res)
        let bellRung = false
        let signedTransaction
        const cheese = (ev) => {
            console.log('cheese',ev); 
            if (ev.data.hasOwnProperty('res')) 
            {
                window.removeEventListener('message', cheese)
                signedTransaction = ev.data.res
                console.log('sign event listener is resolving')
                bellRung = true;
            }
        }
        window.addEventListener('message',cheese) 
        console.log('sign is resolving')
     }
}

