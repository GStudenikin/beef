#
# Copyright (c) 2006-2015 Wade Alcorn - wade@bindshell.net
# Browser Exploitation Framework (BeEF) - http://beefproject.com
# See the file 'doc/COPYING' for copying permission
#
class Web_filt < BeEF::Core::Command

  def self.options
	
		configuration = BeEF::Core::Configuration.instance
		proto = configuration.get("beef.http.https.enable") == true ? "https" : "http"
		waf_url = "#{proto}://#{configuration.get("beef.http.host")}:#{configuration.get("beef.http.port")}/web_filt"
		return [
			{ 'name' => 'burl', 'description' => 'BeEF', 'ui_label' => 'BeEF URL', 'value' => waf_url, 'width'=>'200px' }
		]
  	end		
  
 # set and return all options for this moduless
  def post_execute 
    content = {}
    content['Info'] = @datastore['info']
    save content
  end
  
end
