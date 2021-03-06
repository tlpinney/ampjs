define(['jshashes'], function(Hashes) {
  var Exchange;

  Exchange = (function() {
    function Exchange(name, hostName, vHost, port, routingKey, queueName, exchangeType, isDurable, autoDelete, _arguments) {
      this.name = name;
      this.hostName = hostName;
      this.vHost = vHost;
      this.port = port;
      this.routingKey = routingKey;
      this.queueName = queueName;
      this.exchangeType = exchangeType;
      this.isDurable = isDurable;
      this.autoDelete = autoDelete;
      this["arguments"] = _arguments;
    }

    Exchange.prototype.toString = function() {
      return "{Name: " + this.name + ", HostName: " + this.hostName + ", VirtualHost: " + this.vHost + ", Port: " + this.port + ", RoutingKey: " + this.routingKey + ", Queue Name: " + this.queueName + ", ExchangeType: " + this.exchangeType + ", IsDurable: " + this.isDurable + ", IsAutoDelete: " + this.autoDelete + "}";
    };

    Exchange.prototype.hashCode = function() {
      return new Hashes.MD5(this.toString).hex();
    };

    Exchange.prototype.equals = function(input) {
      if (!_.isObject(input)) {
        return false;
      }
      if (input.name !== this.name) {
        return false;
      }
      if (input.hostName !== this.hostName) {
        return false;
      }
      if (input.vHost !== this.vHost) {
        return false;
      }
      if (input.port !== this.port) {
        return false;
      }
      return true;
    };

    return Exchange;

  })();
  return Exchange;
});
