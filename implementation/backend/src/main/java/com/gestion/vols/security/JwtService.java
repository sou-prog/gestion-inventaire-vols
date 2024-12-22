package com.gestion.vols.security;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import javax.crypto.SecretKey;
import java.time.Instant;
import java.util.Base64;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.concurrent.TimeUnit;

@Service
public class JwtService {
    private static final String SECRET = "E0F3034E69C965DC4F6C3A58988180658FF787A49A6398656C82940FA79D4113C3342C062FD415C97086104CB16A164DE30D1853287337A13CC7E375ACE44379";

    private long EXPIRATION_TIME = TimeUnit.MINUTES.toMillis(30);
    Map<String, String> claims = (Map<String, String>) new HashMap<>().put("iss", "https://example.com");

    public String generateToken(UserDetails userDetails) {
        return
                Jwts.builder()
                        .claims(claims)//adding other claims
                        .subject(userDetails.getUsername())//give the username as the subjevt
                        .issuedAt(Date.from(Instant.now()))//giving the issued data
                        .expiration(Date.from(Instant.now().plusMillis(EXPIRATION_TIME)))//  giving the expiration date in millisecond
                        .signWith(generateKey())//sign in with the secret key
                        .compact();//compacting everything to string
    }

    //decode the secret key from String to a byte array to a SecretKey
    private SecretKey generateKey() {
        byte[] decodedKey = Base64.getDecoder().decode(SECRET);
        return Keys.hmacShaKeyFor(decodedKey);
    }

    // extracting the claim from the token
    private Claims getclaims(String jwt) {
        return Jwts.parser().verifyWith(generateKey()).build().parseSignedClaims(jwt).getPayload();
    }

    // extracting the username from the claim
    public String extractUsername(String jwt) {
        Claims claims = getclaims(jwt);
        return claims.getSubject();
    }

    //extracting the expiration date from the claim then verifying the validity of the token
    public boolean isTokenValid(String jwt, UserDetails userDetails) {
        Date expiration = getclaims(jwt).getExpiration();// extracting the expiration date
        return expiration.after(Date.from(Instant.now())) && userDetails.getUsername().equals(extractUsername(jwt));//verifying the validity of expirations

    }


}