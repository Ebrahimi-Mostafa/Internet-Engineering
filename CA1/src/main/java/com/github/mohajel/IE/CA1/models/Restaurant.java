package com.github.mohajel.IE.CA1.models;

import com.github.mohajel.IE.CA1.utils.MizdooniError;

public class Restaurant {

    public Restaurant(String name, String managerUserName, String type, Hour startTime, Hour endTime, String description, Address address) throws MizdooniError {
        this.name = name;
        this.managerUserName = managerUserName;
        this.type = type;

        if (!(startTime.isHourRounded() && endTime.isHourRounded())) {
            throw new MizdooniError(MizdooniError.HOUR_IS_NOT_ROUND);
        }
        this.startTime = startTime;
        this.endTime = endTime;
        this.description = description;
        this.address = address;

    }

    public String name;
    public String managerUserName;
    public String type;
    public Hour startTime;
    public Hour endTime;
    public String description;
    public Address address;
}
