package cn.jiemin.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import cn.jiemin.model.UserEntity;

/**
 * Created by 10412 on 2016/12/21.
 */
@Repository
public interface UserRepository extends JpaRepository<UserEntity, Integer>
{
    @Modifying          //说明该方法是修改方法
    @Transactional      //说明该方法是事性操作

    // 定义查询
    // @Param注解用于提取参数
    @Query("update UserEntity us set us.nickname=:qNickname, us.firstName=:qFirstName, us.lastName=:qLastName, us.password=:qPassword where us.id=:qId")
    public void updateUser(@Param("qNickname") String nickname, @Param("qFirstName") String firstName,
                           @Param("qLastName") String lastName, @Param("qPassword") String password, @Param("qId") Integer id);




}
