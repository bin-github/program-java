package qb.name.utils;

import com.google.common.base.Charsets;
import com.google.common.base.Strings;
import com.google.common.hash.Hashing;

/**
 * @author qb
 * @description:
 * @date 2017-1-24 11:23
 */
public class Encryption {

    // 封装guava的md5加密方法
    public static String mixMd5(String password){
        if(Strings.isNullOrEmpty(password)){
            return "";
        }
        return Hashing.md5().newHasher().putString(password, Charsets.UTF_8).hash().toString();
    }
}
